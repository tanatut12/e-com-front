/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse, Method } from 'axios';

import { AuthStore } from '../store/authStore';
import { env } from '../constants/environment';

export const fetch = <T>(
  method: Method = 'GET',
  path = '/',
  data: any = {},
  headers = {},
  apiUrl = env.API.API_URL,
  options: any = {},
) => {
  const baseURL = `${apiUrl}/${path}`;
  const queryName = method === 'GET' ? 'params' : 'data';

  const api = axios.create({
    baseURL,
  });

  api.interceptors.request.use((config) => {
    // GET TOKEN
    const { token } = AuthStore.getState();

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error && error instanceof AxiosError && error.response) {
        console.log('error axios respose', error);
        const errorResponse = error.response;
        if (errorResponse.status === 401) {
          window.location.href = '/login';
          const { clear } = AuthStore.getState();

          clear();
        }
        return Promise.reject(error.response.data);
      }
    },
  );

  const contentTypeHeader =
    data instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

  const response = api.request({
    method,
    baseURL,
    [queryName]: data,
    headers: {
      Accept: 'application/json',
      ...contentTypeHeader,
      ...headers,
    },
    ...options,
  });

  return Promise.resolve<AxiosResponse<T, any>>(response);
};
