export interface IUser {
  id: string
  name: string
  surname: string
  patronymic: string
  email: string
}

export interface IFormDataLogin extends Pick<IUser, 'email'> {
  password: string
}

export interface IFormDataLoginRegister extends Pick<IUser, 'email' | 'name'> {
  password: string
}
