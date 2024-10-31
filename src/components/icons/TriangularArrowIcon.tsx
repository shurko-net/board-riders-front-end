import React from 'react'
const TriangularArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
    <path d='M0 19v-7.372L15.714 9.5 0 7.372V0l22 9.5L0 19Z' />
  </svg>
)
export default TriangularArrow
