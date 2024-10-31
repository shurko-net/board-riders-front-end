import { ReactNode, useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'

interface AccordionProps {
  children: ReactNode
  title: string
}

function Accordion({ children, title }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className='border-white py-4 sm:border-b sm:border-opacity-20'>
      <button
        className='hidden w-full justify-between sm:flex md:items-center'
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className='text-white'>{title}</span>
        <ArrowIcon
          fill='white'
          className={`${accordionOpen && 'rotate-180'} transform transition-transform duration-300 ease-out`}
        />
      </button>
      <h1 className='mb-6 block text-white sm:hidden'>{title}</h1>
      <div
        className={`sm:grid sm:overflow-hidden sm:transition-all sm:duration-300 sm:ease-in-out ${accordionOpen ? 'sm:mt-[1.25rem] sm:grid-rows-[1fr] sm:opacity-100' : 'sm:grid-rows-[0fr] sm:opacity-0'}`}
      >
        <div className='overflow-hidden text-white'>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
