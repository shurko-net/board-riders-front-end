interface InputProps {
  type: string
  text: string
  key?: string | undefined
  name?: string
}

export const Input = ({ text, ...rest }: InputProps) => {
  return (
    <>
      <p className='mb-[0.3125] text-darkGray caption'>{text}</p>
      <input
        className='mb-[1.5625rem] h-[3.125rem] w-full cursor-text border border-solid border-gray px-4 text-[1rem] focus:rounded-none focus:border-[2px] focus:border-black focus:outline-none'
        autoComplete='off'
        {...rest}
      />
    </>
  )
}
