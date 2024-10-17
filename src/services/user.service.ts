import { instance } from '@/api/axios'
import { IUser } from '@/types/types'

class UserService {
  private _BASE_URL = '/user'

  async fetchProfile() {
    return instance.get<IUser>(`${this._BASE_URL}/get-user`)
  }
}

export default new UserService()
