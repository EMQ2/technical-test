import axios from "axios";
import { initInterceptors } from "./Interceptors";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

initInterceptors(api);

const get = async (endpoint: string, parameters: Object) => {
  const response = await api.get(endpoint, { params: parameters });
  return response.data;
};

const post = async (endpoint: string, parameters: Object) => {
  const response = await api.post(endpoint, parameters);
  return response.data;
};

export { get, post };
