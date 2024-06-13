import axios, { AxiosInstance, AxiosRequestConfig, Method, AxiosResponse, AxiosHeaders, AxiosHeaderValue } from 'axios';

interface FetchOptions {
  url: string;
  method?: Method;
  data?: any;
  headers?: AxiosHeaders;
}

// Membuat instance axios dengan baseURL
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL
});

export default async function requestData<T>(options: FetchOptions): Promise<T> {
  const { url, method = 'GET', data, headers } = options;
  
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    headers
  };

  try {
    const response: AxiosResponse<T> = await axiosInstance(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}