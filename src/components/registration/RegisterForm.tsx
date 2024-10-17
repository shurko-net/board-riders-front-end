import { RegisterUser } from '@/api/actions'
import { useRegister } from '@/api/queries/useRegister'
import { registerSchema } from '@/utils/validation/formSchemas'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import axios from 'axios'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import { Input } from '../Input'
import style from './registerForm.module.scss'
const RegisterForm = () => {
  const register = useRegister()
  // const [errorMessage, setErrorMessage] = useState('')
  const [checked, setChecked] = useState(false)
  const [lastResult, action] = useFormState(RegisterUser, undefined)
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: registerSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onSubmit() {
      register.mutate({
        email: fields.email?.value || '',
        password: fields.password?.value || '',
        name: fields.name?.value || ''
      })
    }
  })

  if (register.isPending) return <div>Loading...</div>

  return (
    <form
      className='relative [&>input:nth-child(6)]:mb-[0.9375rem]'
      action={action}
      id={form.id}
      onSubmit={form.onSubmit}
    >
      <Input
        key={fields.name.key}
        name={fields.name.name}
        text='Имя*'
        type='text'
      />
      <p className='absolute left-0 top-[15.625%] text-red'>
        {fields.name.errors}
      </p>
      <Input
        key={fields.email.key}
        name={fields.email.name}
        text='Еmail*'
        type='email'
      />
      <p className='absolute left-0 top-[36.8303571%] text-red'>
        {register.isError && axios.isAxiosError(register.error)
          ? register.error.response?.data
          : fields.email.errors}
      </p>
      <Input
        key={fields.password.key}
        name={fields.password.name}
        text='Пароль*'
        type='tel'
      />
      <p className='absolute left-0 top-[58.0357143%] text-red'>
        {fields.password.errors}
      </p>
      <div className='mb-[2.375rem] inline-block'>
        <div className={style.checkboxWrapper}>
          <label className={style.control}>
            Вы соглашаетесь с правилами
            <input
              className='absolute -z-[-1] opacity-0'
              type='checkbox'
              checked={checked}
              onChange={() => setChecked(!checked)}
              key={fields.agreement.key}
              name={fields.agreement.name}
            />
            <div className={style.controlIndicator}></div>
          </label>
        </div>
      </div>
      <p className='absolute left-0 top-[69.1964286%] text-red'>
        {fields.agreement.errors}
      </p>
      <button className='btn-border-normal-state mb-[3.125rem] border-black transition-colors duration-[250ms] ease-in-out subtitle3 hover:text-darkGray'>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegisterForm
