const pup = require('puppeteer');

const url = 'https://www.buscape.com.br/';

const buscapeScraping = async ({ searchFor, category }) => {
  const browser = await pup.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector('.AutoCompleteStyle_input__HG105');

  await page.type('.AutoCompleteStyle_input__HG105', `${searchFor}`);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.AutoCompleteStyle_submitButton__GkxPO')
  ]);

  const links = await page.$$eval('.Paper_Paper__HIHv0 > a', elements => elements.map((a) => a.href));

  const data = [];

  for (let i = 0; i < 6; i += 1) {
    await page.goto(links[i]);
    await page.waitForSelector('.Text_Text__h_AF6');

    const title = await page.$eval('.Title_Name__qQvSr > h1', element => element.innerText);
    const urlImg = await page.$eval('.swiper-slide > img', element => element.src);
    const description = await page.$eval('.AttributeBlock_GroupContent__nhYRo > p', element => element.innerText);
    const price = await page.$eval('.Price_ValueContainer__1U9ia > strong', element => element.innerText);

    data.push({
      urlImg,
      title,
      description,
      price,
      urlProduct: links[i],
      searchTag: searchFor,
      category,
      website: 'Buscapé'
    });
  };

  // await page.waitForTimeout(5000);

  await browser.close();

  return data;
};

module.exports = buscapeScraping;