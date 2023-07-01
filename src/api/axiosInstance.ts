import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1_000,
};

export const axiosInstance = axios.create({
  ...defaultConfig,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY,
  },
});

export const adminAxiosInstance = axios.create(defaultConfig);
