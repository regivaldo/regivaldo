"""Validate public SEO output and origin handling, without contacting external services."""
import json
import re
import tempfile
import unittest
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from seo import ROOT, ROUTES, EDITIONS, render, validate_url, write_discovery


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.tags = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class SEOCheck(unittest.TestCase):
    def test_public_pages(self):
        origin = 'https://author.example'
        images = set()
        for route in ROUTES:
            with self.subTest(route=route):
                source = (ROOT / route.lstrip('/') / 'index.html').read_text()
                html = render(source, route, origin)
                doc = Document(html)
                meta = {a.get('property') or a.get('name'): a.get('content') for tag, a in doc.tags if tag == 'meta'}
                canonical = [a['href'] for tag, a in doc.tags if tag == 'link' and a.get('rel') == 'canonical']
                self.assertEqual(canonical, [origin + route])
                self.assertEqual(meta['og:url'], canonical[0])
                self.assertEqual(meta['og:image'], meta['twitter:image'])
                self.assertEqual(meta['og:image:secure_url'], meta['og:image'])
                self.assertEqual(meta['twitter:card'], 'summary_large_image')
                for key in ['title', 'description', 'image:alt']:
                    self.assertEqual(meta['og:' + key], meta['twitter:' + key])
                self.assertIn('max-image-preview:large', meta['robots'])
                parsed = urlsplit(meta['og:image'])
                self.assertEqual(parsed.scheme, 'https')
                self.assertEqual(parsed.netloc, 'author.example')
                image = ROOT / parsed.path.lstrip('/')
                self.assertTrue(image.is_file())
                self.assertLess(image.stat().st_size, 300_000)
                self.assertEqual(image.read_bytes()[:2], b'\xff\xd8')
                images.add(parsed.path)
                alternates = {a['hreflang']: a['href'] for tag, a in doc.tags if tag == 'link' and a.get('rel') == 'alternate'}
                self.assertEqual(alternates, {lang: origin + path for lang, path in EDITIONS.items()} if route in EDITIONS.values() else {})
                schema = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.S).group(1))
                nodes = schema['@graph']
                self.assertEqual(schema['@context'], 'https://schema.org')
                self.assertTrue(any(n['@type'] == 'Person' for n in nodes))
                if route.startswith('/obras/'):
                    book = next(n for n in nodes if n['@type'] == 'Book')
                    self.assertEqual(book['url'], origin + route)
                    self.assertEqual(book['inLanguage'], 'en' if route == '/obras/suicide/' else 'pt-BR')
                # Rendering twice must never duplicate metadata or JSON-LD.
                self.assertEqual(render(html, route, origin), html)
        self.assertEqual(len(images), len(ROUTES), 'Every page needs its own social card')

    def test_discovery(self):
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory)
            origin = 'https://author.example'
            write_discovery(out, origin)
            sitemap = ET.parse(out / 'sitemap.xml')
            urls = [node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
            self.assertEqual(urls, [origin + route for route in ROUTES])
            robots = (out / 'robots.txt').read_text()
            self.assertIn('Allow: /', robots)
            self.assertIn(f'Sitemap: {origin}/sitemap.xml', robots)
            self.assertNotIn('Disallow:', robots)

    def test_invalid_origins(self):
        for value in [None, '', 'http://author.example', 'https://author.example/path',
                      'https://user:password@author.example', 'https://author.example?x=1',
                      'https://author.example/#test', 'https://author.example:8000',
                      'https://author.example\n', 'https://author.example/"']:
            with self.subTest(value=value), self.assertRaises(ValueError):
                validate_url(value)
        self.assertEqual(validate_url('https://author.example/'), 'https://author.example')


if __name__ == '__main__':
    unittest.main()
