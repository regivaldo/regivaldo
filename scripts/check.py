"""Check the static site's routes, metadata, assets and purchase destinations."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
ROUTES = ['/', '/obras/vinganca/', '/obras/suicidio/', '/obras/suicide/', '/sobre/']
EXPECTED = {'/obras/vinganca/': 'https://www.amazon.com.br/dp/B00LCCX548',
            '/obras/suicidio/': 'https://www.amazon.com.br/dp/B012UO8RHQ',
            '/obras/suicide/': 'https://www.amazon.com/dp/B01I3L0PY8'}

class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(); self.tags = []; self.feed(source)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

pages = {route: Document((ROOT / route.lstrip('/') / 'index.html').read_text()) for route in ROUTES}
titles = set()
for route, doc in pages.items():
    assert sum(tag == 'h1' for tag, _ in doc.tags) == 1, route
    assert any(tag == 'html' and attrs.get('lang') == ('en' if route == '/obras/suicide/' else 'pt-BR') for tag, attrs in doc.tags), route
    for key in ['description', 'og:title', 'og:description', 'og:image', 'twitter:card']:
        assert any(tag == 'meta' and (attrs.get('name') == key or attrs.get('property') == key) and attrs.get('content') for tag, attrs in doc.tags), (route, key)
    title = next(attrs['content'] for tag, attrs in doc.tags if attrs.get('property') == 'og:title')
    assert title not in titles, route
    titles.add(title)
    for tag, attrs in doc.tags:
        if tag == 'img':
            assert 'alt' in attrs and 'width' in attrs and 'height' in attrs, (route, attrs)
        url = attrs.get('href') or attrs.get('src')
        if not url: continue
        parsed = urlsplit(url)
        if parsed.scheme: continue
        target_route = parsed.path or route
        target = ROOT / target_route.lstrip('/')
        if target.is_dir(): target /= 'index.html'
        assert target.is_file(), (route, url)
        if parsed.fragment:
            other = Document(target.read_text())
            assert any(a.get('id') == parsed.fragment for _, a in other.tags), (route, url)
    if route in EXPECTED:
        assert any(attrs.get('href') == EXPECTED[route] for _, attrs in doc.tags), route
    print(f'OK {route}: metadata, heading, language, images, links and fragments')
print('All five pages passed. External URLs checked for exact destination, not retailer availability.')
