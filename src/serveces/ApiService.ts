import axios, { AxiosResponse } from 'axios';
import { Pizza } from '@/types';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/powerlimit/vue-pizza',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default {
  getItems(): Promise<AxiosResponse<Pizza[]>> {
    return apiClient.get('/pizza');
  },
};
