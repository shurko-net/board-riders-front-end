import React from 'react'
const ProfileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      fill='#000'
      d='M12 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 15c6.63 0 12 2.685 12 6v3H0v-3c0-3.315 5.37-6 12-6Z'
    />
  </svg>
)
export default ProfileIcon
