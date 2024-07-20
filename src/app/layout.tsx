import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import Layout from '@/components/common/layout/layout'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '天樹際 テンプレート',
  description: '天樹際 テンプレート',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
