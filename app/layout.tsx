import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hardik Varshney - Portfolio',
  description: 'Full Stack Developer and B.Tech Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#fffaf5] dark:bg-[#1a1a1a]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 