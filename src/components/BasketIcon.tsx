import React from 'react'
const BasketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 20'
    preserveAspectRatio='xMidYMid meet'
    fill='none'
    {...props}
  >
    <path
      fill='#000'
      d='M22.799 4.8H6.554L4.692.703A1.2 1.2 0 0 0 3.6 0H0v2.4h2.827l5.68 12.496A1.2 1.2 0 0 0 9.6 15.6h9.6c.48 0 .913-.285 1.102-.727l3.6-8.4A1.197 1.197 0 0 0 22.799 4.8ZM10.2 20.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM18.6 20.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z'
    />
  </svg>
)
export default BasketIcon
