import axios from 'axios';

const api = axios.create({
  baseURL: 'https://products-search-service.up.railway.app',
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
