import { chromium } from 'playwright';

const OUT = 'C:/Users/user/AppData/Local/Temp/claude/d--PROJECTS-StackNext/ac0c6101-7b42-48a8-bf94-d0dc4720f95d/scratchpad';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(String(err)));

await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

const section = page.locator('.client-marquee');
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await section.screenshot({ path: `${OUT}/marquee-light.png` });

await page.evaluate(() => document.documentElement.classList.add('dark'));
await page.waitForTimeout(500);
await section.screenshot({ path: `${OUT}/marquee-dark.png` });

console.log('Console errors:', errors);
await browser.close();
