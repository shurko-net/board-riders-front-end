import { axiosClassic } from '@/api/axios'
import { IFormDataLogin, IUser } from '@/types/types'

class AuthService {
  async main(type: 'login' | 'registration', data: IFormDataLogin) {
    return await axiosClassic.post<IUser>(`/auth/${type}`, data)
  }
  async refreshToken() {
    return await axiosClassic.get('/auth/refresh')
  }
  async logout() {
    return await axiosClassic.post('/auth/logout')
  }
}

export default new AuthService()
