import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestData = async (endpoint, searchData) => {
  console.log('=>>', searchData);
  const { data } = await api.post(endpoint, searchData);
  return data;
};

export default api;
