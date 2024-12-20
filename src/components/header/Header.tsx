'use client'

import { useLogout } from '@/api/queries/useLogout'
import { useDynamicAdapt } from '@/hooks/useDynamicAdapt'
import { IUser } from '@/types/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Registration } from '../registration/Registration'

import ArrowIcon from '../icons/ArrowIcon'
import BasketIcon from '../icons/BasketIcon'
import CardIcon from '../icons/CardIcon'
import CarIcon from '../icons/CarIcon'
import FavoritesIcon from '../icons/FavoritesIcon'
import GetOutIcon from '../icons/GetOutIcon'
import LocationIcon from '../icons/LocationIcon'
import LogoIcon from '../icons/LogoIcon'
import LoupeIcon from '../icons/LoupeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import SingIcon from '../icons/SignIcon'
import Spoiler from '../spoiler/Spoiler'
import style from './header.module.scss'

const menuCatalogArray = [
  'Новинки',
  'Сноуборд',
  'Лыжи',
  'Скейт',
  'Лонгборд',
  'Вейкборд',
  'Серф',
  'Sup',
  'Одежда',
  'Обувь',
  'Аксессуары',
  'Бренды',
  'Распродажа'
]

interface HeaderProps {
  user: IUser | undefined
}

function Header({ user }: HeaderProps) {
  const { mutateLogout } = useLogout()
  // const { isLoginLoading } = useLogin()

  useDynamicAdapt('max')
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [isActiveLocation, setIsActiveLocation] = useState(false)
  const [isActiveAccount, setIsActiveAccount] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toggleLoginButton, setToggleLoginButton] = useState(1)
  const buttonRefLocation = useRef<HTMLButtonElement | null>(null)
  const buttonRefAccount = useRef<HTMLButtonElement | null>(null)

  function updateToggle(id: number) {
    setToggleLoginButton(id)
  }

  useEffect(() => {
    const handleResize = () => {
      if (hasMounted && window.innerWidth > 767.98 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    setHasMounted(true)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, hasMounted])

  return (
    <header className={style.header}>
      <div className={style.top}>
        <div className='container flex min-h-[30px] items-center gap-[20px]'>
          <div data-da={`.${style.menuBody},992,2`} className={style.topMenu}>
            <nav className={style.topBody}>
              <div className={style.locationBlock}>
                <button
                  onClick={() => setIsActiveLocation(!isActiveLocation)}
                  className={style.locationButton}
                  ref={buttonRefLocation}
                >
                  <LocationIcon className='md:fill-[black]' fill='#F2F2F2' />
                  <span>Ваш регион доставки: Киев</span>
                  <ArrowIcon
                    fill='#F2F2F2'
                    className={`transform transition-transform duration-300 ease-out hover:scale-105 md:fill-[black] ${isActiveLocation && '-translate-y-[30%] rotate-[180deg]'}`}
                  />
                </button>
                <Spoiler
                  buttonRef={buttonRefLocation}
                  isActive={isActiveLocation}
                  setIsActive={setIsActiveLocation}
                  className='absolute left-[-24px] top-[20px] z-20 mt-[15px] h-auto w-[520px] rounded-[6px] bg-white p-[24px] text-darkGray shadow-custom md:w-[100vw]'
                >
                  <div className={style.locationContent}>
                    <h1 className={style.selected}>
                      Ваше місто: <strong className='text-black'>Київ</strong>
                    </h1>
                    <form className={style.form} action='#'>
                      <input
                        placeholder='Введіть ваше місто'
                        type='text'
                        className={style.input}
                        autoComplete='off'
                      />
                    </form>
                  </div>
                  <div className={style.locationCities}>
                    <Link className={style.city} href=''>
                      Київ
                    </Link>
                    <Link className={style.city} href=''>
                      Дніпро
                    </Link>
                    <Link className={style.city} href=''>
                      Харків
                    </Link>
                    <Link className={style.city} href=''>
                      Одеса
                    </Link>
                    <Link className={style.city} href=''>
                      Кривий Ріг
                    </Link>
                  </div>
                  <hr className='my-[24px] h-[1px] w-full border-lightGray' />
                  <p className={style.locationInfo}>
                    Вибір міста допоможе відображати актуальну інформацію про
                    наявність товару, його ціни та способів доставки в вашому
                    місті
                  </p>
                  <button
                    onClick={() => setIsActiveLocation(!isActiveLocation)}
                    className={style.close}
                  ></button>
                </Spoiler>
              </div>
              <ul className={style.topMenuList}>
                <li className={style.topMenuItem}>
                  <Link className={style.topMenuLink} href='/#'>
                    Магазины
                  </Link>
                </li>
                <li className={style.topMenuItem}>
                  <Link className={style.topMenuLink} href='/#'>
                    Помощь
                  </Link>
                </li>
                <li className={style.topMenuItem}>
                  <Link className={style.topMenuLink} href='/#'>
                    Блоги
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.benefitsBlock}>
            <div className={style.benfit}>
              <CarIcon />
              <p>Бесплатная доставка*</p>
            </div>
            <div className={style.benfit}>
              <CardIcon />
              <p>Оплата при получении</p>
            </div>
            <div className={style.benfit}>
              <SingIcon />
              <p>Возврат в течение 14 дней</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.bodyContainer}>
          <div
            className={`md:fixed md:left-0 md:top-0 md:z-[2] md:h-full md:w-full md:bg-black/80 ${isOpen ? 'block' : 'hidden'}`}
          ></div>
          <div
            className={`w-full bg-white md:fixed md:left-0 md:top-0 md:z-[5] ${isOpen ? 'block' : 'hidden'}`}
          >
            <div className={style.bodyMobileNavigation}>
              <button
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                className={`${style.iconMenu} ${isOpen ? style.menuOpen : ''}`}
              >
                <span></span>
              </button>
            </div>
          </div>
          <nav className={style.menu}>
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className={`${style.iconMenu} ${isOpen ? style.menuOpen : ''}`}
            >
              <span></span>
            </button>
            <div className={`${style.menuBody} ${isOpen ? 'block' : 'hidden'}`}>
              <div className={style.personalCabinet}>
                <div className={style.personalCabinetContainer}>
                  {user ? (
                    <div className='mb-[1.25rem] flex justify-between'>
                      <p className=''>{`Здравствуйте, ${user.name}`}</p>
                      <button
                        onClick={() => {
                          mutateLogout()
                          setIsOpen(!isOpen)
                        }}
                        className='text-green'
                      >
                        Выйти
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link className='mb-[0.9375rem] text-center' href='/'>
                        Личный кабинет
                      </Link>
                      <button
                        className='btn-normal-state mb-[0.625rem] body2'
                        type='button'
                        onClick={() => {
                          updateToggle(1)
                          setIsModalOpen(true)
                        }}
                      >
                        Войти
                      </button>
                      <button
                        className='btn-border-normal-state mb-[1.25rem]'
                        type='button'
                        onClick={() => {
                          setIsModalOpen(true)
                          updateToggle(2)
                        }}
                      >
                        Зарегистрироваться
                      </button>
                    </>
                  )}
                </div>
                <hr className='mb-[1.25rem] border-t border-[#e5e5e5]'></hr>
              </div>
            </div>
          </nav>

          <nav
            data-da={`.${style.bodyMobileNavigation},992,first`}
            className={style.bodyNavigation}
          >
            <ul className={style.bodyList}>
              <li className={style.bodyItem}>
                <Link className={style.bodyLink} href='/#'>
                  Мужчинам
                </Link>
              </li>
              <li className={style.bodyItem}>
                <Link className={style.bodyLink} href='/#'>
                  Женщинам
                </Link>
              </li>
              <li className={style.bodyItem}>
                <Link className={style.bodyLink} href='/#'>
                  Детям
                </Link>
              </li>
            </ul>
          </nav>
          <Link href='/#' className={style.logoLink}>
            <LogoIcon />
          </Link>
          <div className={style.userActions}>
            <div className='relative'>
              <button
                onClick={
                  user
                    ? () => setIsActiveAccount(!isActiveAccount)
                    : () => {
                        updateToggle(1)
                        setIsModalOpen(true)
                      }
                }
                ref={buttonRefAccount}
                className={style.userActionsItem}
              >
                {user ? (
                  <div className='cap flex h-[24px] w-[24px] items-center justify-center rounded-[50%] bg-black text-white caption-capital'>
                    {user.name[0]}
                  </div>
                ) : (
                  <ProfileIcon className='h-[24px] w-[24px]' />
                )}

                <p className='md:hidden'>{user ? 'Аккаунт' : 'Войти'}</p>
              </button>
              <Spoiler
                buttonRef={buttonRefAccount}
                isActive={isActiveAccount}
                setIsActive={setIsActiveAccount}
                className='absolute bottom-[-90px] left-[5px] z-20 h-auto w-[135px] bg-white'
              >
                <button className='flex h-[40px] w-[135px] items-center gap-[15px] border border-lightGray pl-[13px] before:absolute before:-top-[6px] before:left-5 before:z-10 before:border-b-[9px] before:border-l-[5px] before:border-r-[5px] before:border-b-lightGray before:border-l-transparent before:border-r-transparent after:absolute after:-top-[4px] after:left-[21px] after:z-10 after:border-b-[7px] after:border-l-[4px] after:border-r-[4px] after:border-b-white after:border-l-transparent after:border-r-transparent'>
                  <ProfileIcon className='h-[16px] w-[16px]' />
                  <p className='text-[8px] uppercase'>мой аккаунт</p>
                </button>
                <button
                  onClick={() => mutateLogout()}
                  className='flex h-[40px] w-[135px] items-center gap-[15px] border border-t-0 border-lightGray pl-[13px]'
                >
                  <GetOutIcon className='h-[20px] w-[18.75px]' />
                  <p className='text-[8px] font-normal uppercase text-darkGray'>
                    выйти
                  </p>
                </button>
              </Spoiler>
            </div>

            <Registration
              onClose={() => setIsModalOpen(false)}
              isOpen={isModalOpen}
              toggleLoginButton={toggleLoginButton}
              updateToggle={updateToggle}
            ></Registration>
            <Link className={style.userActionsItem} href='/#'>
              <FavoritesIcon className='h-[24px] w-[24px] xs:h-auto xs:w-[20px]' />
              <p className='md:hidden'>Избранное</p>
            </Link>
            <Link className={style.userActionsItem} href='/#'>
              <BasketIcon className='h-[24px] w-[24px] xs:h-auto xs:w-[20px]' />
              <p className='md:hidden'>Корзина</p>
            </Link>
            <search
              data-da={`.${style.bodyContainer},479.98,3`}
              className={style.userActionsItem}
            >
              <LoupeIcon className='h-auto w-[24px] xs:w-[17.5px]' />
              <p className='md:hidden'>Поиск</p>
            </search>
          </div>
        </div>
      </div>
      <div data-da={`.${style.menuBody},992,first`} className={style.catalog}>
        <div className='container flex min-h-[40px] items-center md:px-0 md:pt-[3.75rem]'>
          <nav className={style.ctalogMenu}>
            <ul className={style.ctalogMenuList}>
              {menuCatalogArray.map((item, index) => (
                <li
                  className={`${style.catalogMenuItem} ${index === menuCatalogArray.length - 1 ? 'text-red' : ''}`}
                  key={index}
                >
                  <Link href='/' className={style.catalogMenuLink}>
                    {item}
                    <ArrowIcon
                      className='hidden md:block'
                      fill='#black'
                      transform='rotate(270)'
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
