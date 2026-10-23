const { chromium } = require('playwright');
const { default: AxeBuilder } = require('@axe-core/playwright');
const assert = require('node:assert/strict');
const base = process.env.SITE_URL || 'http://127.0.0.1:8000';
const routes = ['/', '/obras/vinganca/', '/obras/suicidio/', '/obras/suicide/', '/sobre/'];
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const width of [360, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200);
        await page.evaluate(() => document.fonts.ready);
        await page.locator('footer').scrollIntoViewIfNeeded();
        await page.waitForTimeout(750);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow ${route} at ${width}`);
        assert(await page.locator('img').evaluateAll(images => images.every(i => i.complete && i.naturalWidth > 0)), `Missing image ${route}`);
        const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        assert.deepEqual(audit.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `Accessibility ${route} ${width}`);
        console.log(`PASS ${width}px ${route}: response, overflow, images, accessibility`);
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base);
    const toggle = page.locator('.menu-toggle');
    await toggle.focus(); await page.keyboard.press('Enter');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Tab');
    assert(await page.locator('#navigation a').first().evaluate(el => el === document.activeElement));
    await page.keyboard.press('Escape');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    assert(await toggle.evaluate(el => el === document.activeElement));
    await toggle.click(); await page.getByRole('link', { name: 'Sobre o autor', exact: true }).click();
    await page.waitForURL('**/sobre/');
    await page.locator('.motion-toggle').click();
    await page.reload();
    assert(await page.locator('html').evaluate(el => el.classList.contains('reduced-motion')));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForFunction(() => document.querySelector('.motion-toggle').disabled);
    assert(await page.locator('.motion-toggle').isDisabled());
    console.log('PASS keyboard menu, Escape and focus return, touch-sized navigation, persistent effects setting and system preference');
    await context.close();
    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const staticPage = await noJS.newPage();
    for (const route of routes) {
      await staticPage.goto(base + route);
      assert(await staticPage.locator('h1').isVisible());
      assert(await staticPage.locator('#navigation').isVisible());
      assert.equal(await staticPage.locator('[data-reveal].pending').count(), 0);
    }
    await noJS.close();
    console.log('PASS all pages without JavaScript');
    assert.deepEqual(errors, []);
    const screenshot = await browser.newPage({ viewport: { width: 1440, height: 1100 }, reducedMotion: 'reduce' });
    await screenshot.goto(base);
    for (const img of await screenshot.locator('img').all()) { await img.scrollIntoViewIfNeeded(); await img.evaluate(el => el.decode()); }
    await screenshot.evaluate(() => scrollTo(0, 0));
    await screenshot.screenshot({ path: '/tmp/rf-home-desktop.png', fullPage: true });
    await screenshot.setViewportSize({ width: 390, height: 844 }); await screenshot.screenshot({ path: '/tmp/rf-home-mobile.png', fullPage: true });
    console.log('PASS no JavaScript or HTTP errors; screenshots saved in /tmp');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
