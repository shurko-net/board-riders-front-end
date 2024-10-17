import React, { useEffect, useRef } from 'react'

interface ISpoilerProps {
  children: React.ReactNode
  isActive?: boolean
  setIsActive?: (active: boolean) => void
  buttonRef?: React.RefObject<HTMLButtonElement>
  className: string
}

function Spoiler({
  children,
  isActive,
  setIsActive,
  buttonRef,
  className
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
      <div ref={dropdownRef} className={className}>
        {children}
      </div>
    )
  )
}

export default Spoiler
