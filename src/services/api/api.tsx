import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.interceptors.response.use(
  ({data}) => data,
  (error: AxiosError) => Promise.reject(error)
)

export default api;