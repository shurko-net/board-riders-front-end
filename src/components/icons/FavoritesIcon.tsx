import React from 'react'
const FavoritesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    preserveAspectRatio='xMidYMid meet'
    fill='none'
    {...props}
  >
    <path
      fill='#333'
      stroke='#000'
      d='M12.258 17.896 12 17.74l-.258.156-6.404 3.865 1.69-7.284.067-.293-.227-.198L1.22 9.085l7.451-.643.3-.026.117-.277L12 1.28l2.912 6.86.117.277.3.026 7.45.643-5.658 4.901-.229.198.07.294 1.698 7.282-6.402-3.864Z'
    />
  </svg>
)
export default FavoritesIcon
