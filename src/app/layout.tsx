import Header from '@/components/header/Header'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import React from 'react'
import '../scss/global.scss'
import { Providers } from './Providers'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Board Riders'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <div className='wrapper'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
