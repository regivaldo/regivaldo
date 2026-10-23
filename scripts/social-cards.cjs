// Render code-native social cards with the site's existing, unaltered artwork.
const { chromium } = require('playwright');
const { readFileSync, mkdirSync } = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const cards = [
  ['inicio', 'pt-BR', 'REGIVALDO FERNANDES · AUTOR', 'Histórias que<br>ficam à espreita.', 'Suspense, terror e drama.', 'capa-vinganca.webp', '#b5c6ec'],
  ['sobre', 'pt-BR', 'SOBRE O AUTOR', 'Regivaldo<br>Fernandes.', 'Conheça o autor de Vingança e Suicídio.', 'autor.webp', '#c0b39f'],
  ['vinganca', 'pt-BR', 'REGIVALDO FERNANDES', 'Vingança.', 'Conheça a obra · Edição em português', 'capa-vinganca.webp', '#b5c6ec'],
  ['suicidio', 'pt-BR', 'REGIVALDO FERNANDES', 'Suicídio.', 'Conheça a obra · Edição em português', 'capa-suicidio.webp', '#b2c8bd'],
  ['suicide', 'en', 'REGIVALDO FERNANDES', 'Suicide.', 'Discover the English edition of Suicídio.', 'capa-suicidio.webp', '#b2c8bd'],
];
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    mkdirSync(path.join(root, 'assets/social'), { recursive: true });
    for (const [slug, lang, label, title, subtitle, file, accent] of cards) {
      const image = readFileSync(path.join(root, 'assets/images', file)).toString('base64');
      await page.setContent(`<!doctype html><html lang="${lang}"><meta charset="utf-8"><style>
        *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#101314;color:#f5f1e9;font-family:Arial,sans-serif;display:flex;align-items:center;padding:64px;gap:50px;border-bottom:8px solid ${accent}}
        main{flex:1}small{font-size:17px;letter-spacing:3px;color:${accent}}h1{font:normal 72px/1.08 Georgia,serif;margin:34px 0}p{font-size:23px;line-height:1.5;color:#ccc}figure{margin:0;width:330px;text-align:center}img{max-width:330px;max-height:480px;object-fit:contain}figcaption{font-size:15px;color:#ccc;margin-top:12px}
        </style><main><small>${label}</small><h1>${title}</h1><p>${subtitle}</p></main><figure><img src="data:image/webp;base64,${image}" alt="">${slug === 'suicide' ? '<figcaption>Portuguese edition cover</figcaption>' : ''}</figure></html>`);
      await page.locator('img').evaluate(el => el.decode());
      await page.screenshot({ path: path.join(root, 'assets/social', `${slug}.jpg`), type: 'jpeg', quality: 90 });
      console.log(`Social card: ${slug} (1200 × 630)`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
