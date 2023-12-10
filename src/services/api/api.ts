import axios, { AxiosError } from "axios";
import useUser from "../../hooks/useUser/useUser";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.response.use(
  ({ data }) => data,
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.request.use((config) => {
  const token = useUser.getState().token;

  if (token) {
    config.headers["x-csrf-token"] = token;
  }
  return config;
});

export default api;
