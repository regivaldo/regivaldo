"""Copy only public files into dist/ for future static hosting."""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parents[1]
out = root / 'dist'
# Refresh only the generated public directories; never delete repository source.
out.mkdir(exist_ok=True)
shutil.copy2(root / 'index.html', out / 'index.html')
for name in ['assets', 'obras', 'sobre']:
    if (out / name).exists(): shutil.rmtree(out / name)
    shutil.copytree(root / name, out / name)
print(f'Static files ready: {out}')
