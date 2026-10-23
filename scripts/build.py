"""Build public static files with SEO URLs for the configured public domain."""
from pathlib import Path
import shutil
from seo import ROUTES, render, site_url, write_discovery

root = Path(__file__).resolve().parents[1]
# Validate before touching existing output; never publish an invented domain.
try:
    origin = site_url()
except ValueError as error:
    raise SystemExit(str(error))
out = root / 'dist'
out.mkdir(exist_ok=True)
for name in ['assets', 'obras', 'sobre']:
    if (out / name).exists():
        shutil.rmtree(out / name)
    shutil.copytree(root / name, out / name)
for route in ROUTES:
    relative = Path(route.lstrip('/')) / 'index.html'
    (out / relative).write_text(render((root / relative).read_text(), route, origin))
write_discovery(out, origin)
print(f'Static files ready: {out} (public URL: {origin})')
