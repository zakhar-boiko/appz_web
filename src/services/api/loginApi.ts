import axios, { AxiosError } from "axios";

const loginApi = axios.create({
  baseURL: "http://localhost:8080",
});

loginApi.interceptors.response.use(
  ({ data }) => data,
  (error: AxiosError) => Promise.reject(error)
);

export default loginApi;
