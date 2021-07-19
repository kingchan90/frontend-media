import axios from 'axios';
import { API_URL, API_KEY } from '@constants';
export const configFromState = (state) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const defaultUrl = process.env.API_URL || API_URL;
  const trendingUrl = `${defaultUrl}/v1/gifs/trending`;
  const api_key = process.env.API_KEY || API_KEY;
  const params = {
    api_key
  }
  return {
    headers,
    trendingUrl,
    defaultUrl,
    params,
    api_key
  };
};

export const get = (url, config) => {
  return axios.get(url, config).then(response => response.data);
};
export const post = (url, data, config) => {
  return axios.post(url, data, config).then(response => response.data);
};
export const put = (url, data, config) => {
  return axios.put(url, data, config).then(response => response.data);
};
export const deleteReq = (url, config) => {
  return axios.delete(url, config).then(response => response.data);
};
