import { chromium } from 'playwright';

const OUT = 'C:/Users/user/AppData/Local/Temp/claude/d--PROJECTS-StackNext/ac0c6101-7b42-48a8-bf94-d0dc4720f95d/scratchpad';
const url = 'file:///D:/PROJECTS/StackNext/src/assets/clients/_grid-preview.html';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 1200 } });
await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/logo-grid-full.png`, fullPage: true });
await browser.close();
console.log('done');
