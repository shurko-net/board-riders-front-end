import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios'

export const API_URL = 'https://localhost:7151/api'

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true
}

export const instance = axios.create(axiosOptions)

export const request = ({ ...options }) => {
  const onSuccess = (response: AxiosResponse) => response
  const onError = (error: AxiosError) => {
    return error
  }

  return instance(options).then(onSuccess).catch(onError)
}

instance.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const { response } = error

    if (response && response.status === 401) {
      try {
        await request({ url: '/auth/refresh' })
        // await request({ url: '/user/get-user' })
      } catch (err) {
        console.error('Ошибка обновления токена', err)
      }
    }
    return Promise.reject(error)
  }
)
