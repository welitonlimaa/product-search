const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
  const result = await axios.get(url)
  return result.data
}

const buscapeScraping = async ({ searchFor, category, website }) => {
  const search = await fetchData(`https://www.buscape.com.br/search?q=${category} ${searchFor}`);
  const $ = cheerio.load(search)
  let links = [];

  $('.Paper_Paper__HIHv0 > a').each((i, e) => {
    const href = $(e).attr('href');
    let url = '';
    if (href.includes('www.buscape')) {
      url = href;
    } else {
      url = 'https://www.buscape.com.br' + href;
    }
    links.push(url);
  });


  const data = await Promise.all(links.slice(0, 10).map(async (link) => {
    const page = await fetchData(link);
    const $ = cheerio.load(page);

    const title = $('h1').text();
    const urlImg = $('.swiper-slide > img').attr('src');
    const description = $('.AttributeBlock_GroupContent__nhYRo > p').text();
    const price = $('.Price_ValueContainer__1U9ia > strong').text();

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

module.exports = buscapeScraping;