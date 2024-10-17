import { Modal } from '../Modal'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import style from './registration.module.scss'

export const Registration = ({
  isOpen,
  onClose,
  toggleLoginButton,
  updateToggle
}: {
  isOpen: boolean
  onClose: () => void
  toggleLoginButton: number
  updateToggle: (id: number) => void
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={style.login}>
        <div className={style.container}>
          <div className={style.body}>
            <h1 className='mb-[1.5625rem] subtitle1'>Вход</h1>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className={style.register}>
        <div className={style.container}>
          <div className={style.body}>
            <h1 className='mb-[1.5625rem] subtitle1'>Регистрация</h1>
            <RegisterForm />
          </div>
        </div>
      </div>

      <div className={style.mobileLogin}>
        <div className={style.container}>
          <div className={style.body}>
            <button
              onClick={() => updateToggle(1)}
              className={`${style.loginButton} ${
                toggleLoginButton === 1
                  ? 'relative after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-black'
                  : ''
              }`}
            >
              Вход
            </button>
            <button
              onClick={() => updateToggle(2)}
              className={`${style.loginButton} ${
                toggleLoginButton === 2
                  ? 'relative after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-black'
                  : ''
              }`}
            >
              Регистрация
            </button>
            {toggleLoginButton === 1 ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>

      <button className={style.closeButton} onClick={onClose}>
        <div className={style.closeCross}></div>
      </button>
    </Modal>
  )
}
