const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
  const result = await axios.get(url)
  return result.data
}

const mlScraping = async ({ searchFor, category, website }) => {
  const search = await fetchData(`https://lista.mercadolivre.com.br/${category}-${searchFor}`);
  const $ = cheerio.load(search)
  let links = [];

  $('.ui-search-result__image > a').each((i, e) => {
    links.push($(e).attr('href'));
  });

  const data = await Promise.all(links.slice(0, 6).map(async (link) => {
    const page = await fetchData(link);
    const $ = cheerio.load(page);

    const title = $('h1').text();
    const urlImg = $('.ui-pdp-gallery__figure > img').attr('src');
    const description = $('.ui-pdp-description__content').text();
    const price = $('.andes-money-amount > meta').attr('content');

    return {
      urlImg,
      title,
      description,
      price,
      urlProduct: link,
      searchTag: searchFor,
      category,
      website
    }
  }));

  return data;
}

module.exports = mlScraping;