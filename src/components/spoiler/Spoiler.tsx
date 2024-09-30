import React, { useEffect, useRef } from 'react'

interface ISpoilerProps {
  children: React.ReactNode
  isActive?: boolean
  setIsActive?: (active: boolean) => void
  buttonRef?: React.RefObject<HTMLButtonElement>
}

function Spoiler({
  children,
  isActive,
  setIsActive,
  buttonRef
}: ISpoilerProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef?.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        if (setIsActive) setIsActive(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    isActive && (
      <div
        ref={dropdownRef}
        className='shadow-custom absolute left-[-24px] top-[20px] z-20 mt-[15px] h-auto w-[520px] rounded-[6px] bg-white p-[24px] text-darkGray md:w-[100vw]'
      >
        {children}
      </div>
    )
  )
}

export default Spoiler
