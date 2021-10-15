import "expect-puppeteer";

const puppeteer = require("puppeteer");

describe("/", () => {
  const pageURL = "http://localhost:3000/";
  let page: any;

  beforeAll(async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(pageURL);
  });

  it('should have "Добро пожаловать!"', async () => {
    const title = await page.$("p");
    const html = await page.evaluate(
      (pHandle: { innerHTML: any }) => title.innerHTML,
      title
    );
    expect(html).toBe("Добро пожаловать!");
  });
});
