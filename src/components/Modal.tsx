import React, { useEffect } from 'react'

export const Modal = ({
  children,
  isOpen,
  onClose
}: {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}) => {
  useEffect(() => {
    const handleDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleDown)
    return () => {
      window.removeEventListener('keydown', handleDown)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 px-[1.25rem] transition-opacity duration-300'
      onClick={onClose}
    >
      <div
        className='relative mx-auto flex max-w-[62rem] bg-white'
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
