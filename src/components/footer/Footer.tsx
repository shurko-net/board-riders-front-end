import { useDynamicAdapt } from '@/hooks/useDynamicAdapt'
import Image from 'next/image'
import Link from 'next/link'
import EmailIcon from '../icons/EmailIcon'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LogoFooterIcon from '../icons/LogoFooterIcon'
import PhoneIcon from '../icons/PhoneIcon'
import TriangularArrow from '../icons/TriangularArrowIcon'
import TwichIcon from '../icons/TwichIcon'
import TwitterIcon from '../icons/TwitterIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import Accordion from './Accordion'
import style from './footer.module.scss'

function Footer() {
  useDynamicAdapt('max')
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.body}>
          <div className={style.top}>
            <Link href='/'>
              <LogoFooterIcon
                className='bg-white md:hidden'
                width={314}
                height={66}
              />
            </Link>
            <div className={style.newsletterBlock}>
              <EmailIcon
                className='mr-[0.9375rem]'
                width={20}
                height={16}
                fill='#828B8D'
                preserveAspectRatio='none'
              ></EmailIcon>
              <p className={style.newsletterBlockText}>
                Подпишись на рассылку и{' '}
                <span className='whitespace-normal'>получи</span>{' '}
                <span className='text-red'>-10%</span> скидку
              </p>
              <TriangularArrow
                width={22}
                height={19}
                fill='#fff'
              ></TriangularArrow>
            </div>
          </div>
          <div className={style.main}>
            <div data-da={`.${style.top},992,2`} className={style.application}>
              <span className='mb-[1.75rem] block text-white'>
                Доступ к ранним релизам в приложении
              </span>
              <div className='flex gap-[1.875rem]'>
                <div className={style.downloadButtons}>
                  <Link href='#'>
                    <Image
                      alt=''
                      width={173}
                      height={51}
                      src='/images/AppStore.png'
                    ></Image>
                  </Link>
                  <Link href='#'>
                    <Image
                      alt=''
                      width={173}
                      height={51}
                      src='/images/GooglePlay.png'
                    ></Image>
                  </Link>
                </div>
                <Image
                  alt=''
                  width={116}
                  height={116}
                  src='/images/QrCode.png'
                  className='md:hidden'
                ></Image>
              </div>
            </div>

            <Accordion title='Контакты'>
              <div className={style.contacts}>
                <div className={style.phoneBlock}>
                  <PhoneIcon width={23} height={23} />
                  <div className={style.phoneTextBody}>
                    <Link
                      className={style.contactsLink}
                      href='tel:+380994556445'
                    >
                      994-556-445
                    </Link>
                    <p className='text-[#8D8D8D] caption'>
                      Бесплатная горячая линия
                      <br /> Ежедневно с 9 до 21
                    </p>
                  </div>
                </div>
                <div className={style.emailBlock}>
                  <EmailIcon fill='white' width={25} height={20} />
                  <div>
                    <Link
                      className={style.contactsLink}
                      href='mailto:ytube.noobtv@gmail.com'
                    >
                      Контактный Email
                    </Link>
                    <p className='text-[#8D8D8D] caption'>
                      ytube.noobtv@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title='Помощь'>
              <nav className={style.menu}>
                <ul className={style.list}>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Доставка
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Оплата
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Возврат
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Отзывы (2290)
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Акции и скидки
                    </Link>
                  </li>
                </ul>
              </nav>
            </Accordion>
            <Accordion title='Компания'>
              <nav className={style.menu}>
                <ul className={style.list}>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Контакты
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      О boardriders
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Вакансии
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Публичная оферта
                    </Link>
                  </li>
                </ul>
              </nav>
            </Accordion>
            <Accordion title='Boardriders Inc.'>
              <nav className={style.menu}>
                <ul className={style.list}>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Франчайзинг
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Quiksilver
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Roxy
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      DC Shoes
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link className={style.menuLink} href='#'>
                      Boardriders Club
                    </Link>
                  </li>
                </ul>
              </nav>
            </Accordion>
          </div>
          <div className={style.bottom}>
            <div className='flex justify-between sm:justify-center'>
              <ul
                data-da={`.${style.top},992,2`}
                className='flex gap-[1.5625rem]'
              >
                <li>
                  <Link href='#'>
                    <TwitterIcon width={22} height={18}></TwitterIcon>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <FacebookIcon width={21} height={21}></FacebookIcon>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <TwichIcon width={23} height={23}></TwichIcon>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <YoutubeIcon width={25} height={18}></YoutubeIcon>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <InstagramIcon width={21} height={21}></InstagramIcon>
                  </Link>
                </li>
              </ul>
              <p className='text-[#BDBDBD] caption'>
                © 2024 Brd.ru. Все права защищены
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
