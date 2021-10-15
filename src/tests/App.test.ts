import 'expect-puppeteer';

const puppeteer = require('puppeteer');

describe('/', () => {
  const pageURL = 'http://localhost:3000/';
  let page: any;

  beforeAll(async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(pageURL);
  });

 
});