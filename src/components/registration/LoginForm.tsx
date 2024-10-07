import Link from 'next/link'
import { Input } from '../Input'
const LoginForm = () => {
  return (
    <form className='[&>input:nth-child(4)]:mb-[0.9375rem]' action='#'>
      <Input text='Номер телефона или email' type='text' />
      <Input text='Пароль' type='password' />
      <Link
        className='mb-[2.3125rem] flex w-full justify-end text-darkGray transition-colors duration-[250ms] ease-in-out body2 hover:text-[#757575]'
        href='#'
      >
        Забыли пароль?
      </Link>
      <button className='btn-normal-state mb-[30px] transition-colors duration-[250ms] ease-in-out subtitle3 hover:text-darkGray'>
        Войти
      </button>
    </form>
  )
}

export default LoginForm
