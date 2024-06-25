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

const Get = async (endpoint: string, parameters: Object) => {
  const response = await api.get(endpoint, { params: parameters });
  return response.data;
};

const Post = async (endpoint: string, parameters: Object) => {
  const response = await api.post(endpoint, parameters);
  return response.data;
};

export { Get, Post };

// TODO: Implement the Put and Delete functions

// Solution
const Put = async (endpoint: string, parameters: Object) => {
  const response = await api.put(endpoint, parameters);
  return response.data;
};

const Delete = async (endpoint: string, parameters: Object) => {
  const response = await api.delete(endpoint, parameters);
  return response.data;
};

export { Put, Delete };
