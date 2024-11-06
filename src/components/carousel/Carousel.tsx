import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import './styles.scss'

const data = [
  {
    src: '/images/Ocean.png',
    alt: ''
  },
  {
    src: '/images/WinterSale.png',
    alt: ''
  },
  {
    src: '/images/LibTech.png',
    alt: ''
  }
]

function Carousel() {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={25}
      loop={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={{ enabled: false }}
      simulateTouch={false}
      watchOverflow={true}
      centeredSlides={true}
      breakpoints={{
        479.98: {
          pagination: {
            enabled: true
          },
          navigation: {
            enabled: false
          }
        },
        480: {
          pagination: {
            enabled: false
          },
          navigation: {
            enabled: true
          }
        }
      }}
    >
      {data.map((img, index) => (
        <SwiperSlide key={index}>
          <img alt={''} src={img.src}></img>
          <div className='absolute bottom-[98px] left-0 z-20 select-none bg-black px-[30px] py-[15px] text-[48px] font-bold text-white sm:bottom-[33px] sm:px-[20px] sm:py-[9px] sm:text-[18px] sm:font-medium'>
            WINTER SALE ДО -70%
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
