const pup = require('puppeteer');

const mlScraping = async ({ searchFor, category, website }) => {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();

  const url = 'https://www.mercadolivre.com.br/';
  await page.goto(url);

  await page.waitForSelector('#cb1-edit');

  await page.type('#cb1-edit', `${category} ${searchFor}`);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.nav-search-btn')
  ]);

  const links = await page.$$eval('.ui-search-result__image > a', elements => elements.map((a) => a.href));

  const data = [];

  for (let i = 0; i < 6; i += 1) {
    await page.goto(links[i]);
    await page.waitForSelector('.nav-logo');

    const verify = await page.evaluate(() => {
      const title = document.querySelector('.ui-pdp-title');
      const description = document.querySelector('.ui-pdp-description__content');
      if (!title || !description) return true;
      return false;
    });

    if (verify) continue;

    const title = await page.$eval('.ui-pdp-title', element => element.innerText);
    const urlImg = await page.$eval('.ui-pdp-gallery__figure > img', element => element.src);
    const description = await page.$eval('.ui-pdp-description__content', element => element.innerText);
    const price = await page.$eval('.andes-money-amount__fraction', element => element.innerText);

    data.push({
      urlImg,
      title,
      description,
      price,
      urlProduct: links[i],
      searchTag: searchFor,
      category,
      website
    });
  };

  // await page.waitForTimeout(5000);

  await browser.close();

  return data;
};

module.exports = mlScraping;