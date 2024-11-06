import React from 'react'
const ArrowIconCarousel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11 23.05.714 12.185 11 1.323'
    />
  </svg>
)
export default ArrowIconCarousel
