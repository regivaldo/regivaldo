"""Shared SEO rendering for complete, static HTML (no client-side metadata)."""
import json
import os
import re
from html import escape, unescape
from pathlib import Path
from urllib.parse import urlsplit
from xml.sax.saxutils import escape as xml_escape

ROOT = Path(__file__).resolve().parents[1]
ROUTES = {
    '/': ('inicio', 'Conheça o universo literário de Regivaldo Fernandes'),
    '/sobre/': ('sobre', 'Regivaldo Fernandes — sobre o autor'),
    '/obras/vinganca/': ('vinganca', 'Vingança, de Regivaldo Fernandes — edição em português'),
    '/obras/suicidio/': ('suicidio', 'Suicídio, de Regivaldo Fernandes — edição em português'),
    '/obras/suicide/': ('suicide', 'Suicide by Regivaldo Fernandes — English edition; Portuguese edition cover'),
}
EDITIONS = {'pt-BR': '/obras/suicidio/', 'en': '/obras/suicide/'}


def site_url():
    value = os.environ.get('SITE_URL') or json.loads((ROOT / 'site.json').read_text()).get('url')
    return validate_url(value)


def validate_url(value):
    if not isinstance(value, str):
        raise ValueError('Defina o domínio público em site.json (url) ou na variável SITE_URL antes de gerar o site.')
    parsed = urlsplit(value)
    if (parsed.scheme != 'https' or not parsed.hostname or '.' not in parsed.hostname
            or parsed.username or parsed.password or parsed.port
            or parsed.path not in ('', '/') or parsed.query or parsed.fragment
            or any(char.isspace() for char in value) or any(char in value for char in '<>"\\')):
        raise ValueError('SITE_URL deve ser a origem HTTPS pública, sem caminho, porta, credenciais, parâmetros ou fragmento.')
    return value.rstrip('/')


def render(source, route, origin=''):
    slug, alt = ROUTES[route]
    title = unescape(re.search(r'<title>(.*?)</title>', source).group(1))
    description = unescape(re.search(r'<meta name="description" content="([^"]*)">', source).group(1))
    lang = 'en' if route == '/obras/suicide/' else 'pt-BR'
    image = f'{origin}/assets/social/{slug}.jpg'
    head = ['<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">',
            '<meta name="color-scheme" content="dark">', f'<title>{escape(title)}</title>']

    def meta(key, value, property=False):
        head.append(f'<meta {"property" if property else "name"}="{key}" content="{escape(value, quote=True)}">')

    meta('description', description)
    meta('author', 'Regivaldo Fernandes')
    meta('robots', 'index, follow, max-image-preview:large')
    if origin:
        head.append(f'<link rel="canonical" href="{escape(origin + route, quote=True)}">')
        if route in EDITIONS.values():
            for language, path in EDITIONS.items():
                head.append(f'<link rel="alternate" hreflang="{language}" href="{escape(origin + path, quote=True)}">')
    for key, value in {
        'og:site_name': 'Regivaldo Fernandes', 'og:title': title, 'og:description': description,
        'og:type': 'book' if route.startswith('/obras/') else 'website',
        'og:locale': 'en_US' if lang == 'en' else 'pt_BR',
        'og:image': image, 'og:image:type': 'image/jpeg', 'og:image:width': '1200',
        'og:image:height': '630', 'og:image:alt': alt,
    }.items():
        meta(key, value, True)
    if origin:
        meta('og:url', origin + route, True)
        meta('og:image:secure_url', image, True)
        if route.startswith('/obras/'):
            meta('book:author', origin + '/sobre/', True)
    for key, value in {'twitter:card': 'summary_large_image', 'twitter:title': title,
                       'twitter:description': description, 'twitter:image': image, 'twitter:image:alt': alt}.items():
        meta(key, value)
    if origin:
        person = {'@type': 'Person', '@id': origin + '/sobre/#autor', 'name': 'Regivaldo Fernandes',
                  'url': origin + '/sobre/', 'image': origin + '/assets/images/autor.jpg'}
        website = {'@type': 'WebSite', '@id': origin + '/#site', 'url': origin + '/',
                   'name': 'Regivaldo Fernandes', 'inLanguage': ['pt-BR', 'en'], 'author': {'@id': person['@id']}}
        page = {'@type': 'AboutPage' if route == '/sobre/' else 'WebPage', '@id': origin + route + '#pagina',
                'url': origin + route, 'name': title, 'description': description, 'inLanguage': lang,
                'isPartOf': {'@id': website['@id']}, 'primaryImageOfPage': {'@type': 'ImageObject',
                'url': image, 'width': 1200, 'height': 630}}
        graph = [website, person, page]
        if route.startswith('/obras/'):
            name = {'vinganca': 'Vingança', 'suicidio': 'Suicídio', 'suicide': 'Suicide'}[slug]
            book = {'@type': 'Book', '@id': origin + route + '#livro', 'url': origin + route,
                    'name': name, 'description': description, 'inLanguage': lang, 'author': {'@id': person['@id']}}
            # The English cover is unavailable; do not label the Portuguese artwork as its cover.
            if slug != 'suicide':
                book['image'] = origin + '/assets/images/capa-' + slug + ('.png' if slug == 'vinganca' else '.jpg')
            page['mainEntity'] = {'@id': book['@id']}
            graph.append(book)
            crumbs = [('Regivaldo Fernandes', '/'), (name, route)]
        elif route == '/sobre/':
            page['mainEntity'] = {'@id': person['@id']}
            crumbs = [('Regivaldo Fernandes', '/'), ('Sobre o autor', route)]
        else:
            crumbs = []
        if crumbs:
            breadcrumb = {'@type': 'BreadcrumbList', '@id': origin + route + '#navegacao', 'itemListElement': [
                {'@type': 'ListItem', 'position': i, 'name': name, 'item': origin + path}
                for i, (name, path) in enumerate(crumbs, 1)]}
            page['breadcrumb'] = {'@id': breadcrumb['@id']}
            graph.append(breadcrumb)
        data = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False).replace('<', '\\u003c')
        head.append(f'<script type="application/ld+json">{data}</script>')
    head.extend(['<link rel="icon" href="/assets/brand/favicon.svg" type="image/svg+xml">',
                 '<link rel="stylesheet" href="/assets/css/site.css">',
                 '<script type="module" src="/assets/js/site.js"></script>'])
    return re.sub(r'<head>.*?</head>', lambda _: '<head>\n' + '\n'.join(head) + '\n</head>', source, flags=re.S)


def write_discovery(out, origin):
    urls = '\n'.join(f'  <url><loc>{xml_escape(origin + route)}</loc></url>' for route in ROUTES)
    (out / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n')
    (out / 'robots.txt').write_text(f'User-agent: *\nAllow: /\n\nSitemap: {origin}/sitemap.xml\n')
