import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const baseURL = 'http://localhost:7001'
// const baseURL = 'https://midway.chkai.cn/'

const instance = axios.create({
  baseURL,
  timeout: 60000,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use((response: AxiosResponse) => {
  const { code, data, msg } = response.data

  return Promise.resolve(response)
})

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config)
  },

  post<T = any>(url: string, data: object, config: AxiosRequestConfig): Promise<T> {
    return instance.post(url, data, config)
  },
}
