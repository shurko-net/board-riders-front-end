import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Board Riders'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
