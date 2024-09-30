import React from 'react'
const SingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      fill='#BDBDBD'
      d='M14.444 14H10v3l-5.556-5L10 7v3h4.444v4ZM10 2c.295 0 .577.105.786.293A.952.952 0 0 1 11.11 3c0 .265-.117.52-.325.707A1.177 1.177 0 0 1 10 4c-.295 0-.577-.105-.786-.293A.952.952 0 0 1 8.89 3c0-.265.117-.52.325-.707C9.423 2.105 9.705 2 10 2Zm7.778 0h-4.645C12.667.84 11.444 0 10 0S7.333.84 6.867 2H2.222c-.59 0-1.154.21-1.571.586C.234 2.96 0 3.47 0 4v14c0 .53.234 1.04.65 1.414.418.375.983.586 1.572.586h15.556c.59 0 1.154-.21 1.571-.586.417-.375.651-.884.651-1.414V4c0-.53-.234-1.04-.65-1.414A2.353 2.353 0 0 0 17.777 2Z'
    />
  </svg>
)
export default SingIcon
