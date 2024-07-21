'use client'

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Kosugi_Maru } from 'next/font/google'

import Header from '@/components/common/header/header'
import Footer from '@/components/common/footer/footer'

const kosugiMaru = Kosugi_Maru({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <NextUIProvider>
      <main className={`${kosugiMaru.className} overflow-x-hidden`}>
        <Header pathname={pathname} />
        {children}
        <Footer />
      </main>
    </NextUIProvider>
  )
}
