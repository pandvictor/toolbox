import axios from "axios";

const baseURL = `http://localhost:3001/`;

export const Get = (functionName, params) => {
  return axios.get(`${baseURL}${functionName}`, params);
};

export const Post = (functionName, params) => {
  return axios.post(`${baseURL}${functionName}`, params);
};
export const Put = (functionName, params) => {
  return axios.put(`${baseURL}${functionName}`, params);
};
