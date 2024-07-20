'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { cva } from 'class-variance-authority'

import { useAnimationFrame } from 'framer-motion'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { contents } from '@/contents/contents'

interface HeaderProps {
  pathname: string
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [bgColor, setBgColor] = useState<'dark' | 'light'>(
    pathname === `/` ? contents.style.darkColor : contents.style.lightColor,
  )

  useEffect(() => {
    if (pathname === `/`) {
      setBgColor(contents.style.darkColor)
    } else {
      setBgColor(contents.style.lightColor)
    }
  }, [pathname])

  const [transparent, setTransparent] = useState(true)

  /* eslint-disable */
  useAnimationFrame((t, delta) => {
    /* eslint-enable */
    const scrollY = window.scrollY || 0
    if (scrollY < 300 && pathname === `/`) {
      setTransparent(true)
    } else {
      setTransparent(false)
    }
  })

  const bgColorForground =
    bgColor === 'dark'
      ? contents.style.bgColorForgroundDark
      : contents.style.bgColorForgroundLight
  const textColor =
    bgColor === 'dark'
      ? contents.style.textColorDark
      : contents.style.textColorLight
  const textColorForground: 'text-white' | 'text-black' =
    bgColor === 'dark'
      ? contents.style.textColorForgroundDark
      : contents.style.textColorForgroundLight

  const navigationMenuTriggerStyle = cva(
    `group inline-flex h-10 w-max items-center font-semibold justify-center rounded-md bg-background bg-transparent ${textColor} px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:${textColor} focus:bg-transparent focus:${textColorForground} focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent/50 data-[state=open]:bg-transparent/50`,
  )

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        isBlurred={isMenuOpen}
        className={`fixed ${transparent ? 'bg-transparent' : bgColorForground}`}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href={`/`} className={`${textColor} font-semibold`}>
              {contents.header.title}
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={`sm:hidden ${textColor}`}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={`/stage`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.stage}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/event`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`{${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.event}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/lab`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`{${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.lab}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/stall`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`{${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.stall}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarContent>

        <NavbarMenu
          className={`${transparent ? 'bg-transparent' : bgColorForground}`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col w-screen gap-4 justify-center">
              <NavigationMenuItem>
                <Link href={`/stage`} legacyBehavior passHref>
                  <NavigationMenuLink
                    onClick={() => setIsMenuOpen(false)}
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.stage}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/event`} legacyBehavior passHref>
                  <NavigationMenuLink
                    onClick={() => setIsMenuOpen(false)}
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.event}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/lab`} legacyBehavior passHref>
                  <NavigationMenuLink
                    onClick={() => setIsMenuOpen(false)}
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.lab}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/stall`} legacyBehavior passHref>
                  <NavigationMenuLink
                    onClick={() => setIsMenuOpen(false)}
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    {contents.header.stall}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Header
