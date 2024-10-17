import authService from '@/services/auth/auth.sevice'
import axios, { CreateAxiosDefaults } from 'axios'

export const API_URL = 'https://localhost:7151/api'

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.response.use(
  config => config,
  async error => {
    const originRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originRequest._isRetry = true
      try {
        await authService.refreshToken()
        return instance.request(originRequest)
      } catch (err) {
        console.log('err', err)
      }
    }
    throw error
  }
)
