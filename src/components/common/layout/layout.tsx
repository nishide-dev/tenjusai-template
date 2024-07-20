'use client'

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { usePathname } from 'next/navigation'

import Header from '@/components/common/header/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <NextUIProvider>
      <main>
        <Header pathname={pathname} />
        {children}
      </main>
    </NextUIProvider>
  )
}
