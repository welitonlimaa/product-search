export const requestData = async ({ searchFor, category, website }) => {
  console.log({ searchFor, category, website });
  const url = `https://products-search-service.up.railway.app/${website}/${category}/${searchFor}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://products-search-service.up.railway.app',
// });

// export const requestData = async (endpoint) => {
//   const { data } = await api.get(endpoint);
//   return data;
// };

// export default api;
