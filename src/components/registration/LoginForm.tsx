'use client'
import { LoginUser } from '@/api/actions'
import { useLogin } from '@/api/queries/useLogin'
import { loginSchema } from '@/utils/validation/formSchemas'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import axios from 'axios'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { Input } from '../Input'
const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const { mutateLogin, isError, error, isLoginLoading } = useLogin()

  const [lastResult, action] = useFormState(LoginUser, undefined)
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onSubmit() {
      mutateLogin({
        email: fields.email?.value || '',
        password: fields.password?.value || ''
      })
      onClose()
    }
  })

  if (isLoginLoading) return <div>Loading</div>

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      className='relative [&>input:nth-child(4)]:mb-[0.9375rem]'
      action={action}
    >
      <Input
        key={fields.email.key}
        text='Номер телефона или email'
        type='text'
        name={fields.email.name}
      />
      <p className='absolute left-0 top-[21.3068182%] text-red'>
        {fields.email.errors}
      </p>
      <Input
        name={fields.password.name}
        key={fields.password.key}
        text='Пароль'
        type='password'
      />
      <p className='absolute left-0 top-[49.6987952%] text-red'>
        {isError && axios.isAxiosError(error)
          ? error.response?.data
          : fields.password.errors}
      </p>
      <div className='flex justify-end'>
        <Link
          className='mb-[2.3125rem] inline-block text-darkGray transition-colors duration-[250ms] ease-in-out body2 hover:text-[#757575]'
          href='#'
        >
          Забыли пароль?
        </Link>
      </div>
      <button className='btn-normal-state mb-[30px] transition-colors duration-[250ms] ease-in-out subtitle3 hover:text-darkGray'>
        Войти
      </button>
    </form>
  )
}

export default LoginForm
