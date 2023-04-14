export const requestData = async ({ searchFor, category, website }) => {
  const url = `https://products-search-service.up.railway.app/${website}/${category}/${searchFor}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
