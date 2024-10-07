import { useState } from 'react'
import { Input } from '../Input'
import style from './registerForm.module.scss'
const RegisterForm = () => {
  const [checked, setChecked] = useState(false)
  return (
    <form className='[&>input:nth-child(6)]:mb-[0.9375rem]' action='#'>
      <Input text='Имя*' type='text' />
      <Input text='Еmail*' type='email' />
      <Input text='Номер телефона*' type='tel' />
      <form className='mb-[2.375rem] inline-block' action='#'>
        <div className={style.checkboxWrapper}>
          <label className={style.control}>
            Вы соглашаетесь с правилами
            <input
              className='absolute -z-[-1] opacity-0'
              type='checkbox'
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div className={style.controlIndicator}></div>
          </label>
        </div>
      </form>
      <button className='btn-border-normal-state mb-[3.125rem] border-black transition-colors duration-[250ms] ease-in-out subtitle3 hover:text-darkGray'>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegisterForm
