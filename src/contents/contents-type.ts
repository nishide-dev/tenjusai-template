import { Color } from '@/lib/types'

export type ContentsType = {
  pages: {
    home: {
      title: string
      th: number
      bgImage: string
      bgOpacity: string
      bgColor: string
    }
  }
  pamphlet: {
    title: string
    url: string
  }
  style: {
    bgColorForgroundLight: `bg-${Color}-100` | `bg-${Color}-900`
    bgColorForgroundDark: `bg-${Color}-100` | `bg-${Color}-900`
    textColorLight: 'text-gray-100' | 'text-gray-900'
    textColorDark: 'text-gray-100' | 'text-gray-900'
    textColorForgroundLight: 'text-white' | 'text-black'
    textColorForgroundDark: 'text-white' | 'text-black'
    lightColor: 'light' | 'dark'
    darkColor: 'light' | 'dark'
  }
  header: {
    title: string
    stage: string
    event: string
    lab: string
    stall: string
  }
  footer: {
    title: string
    description: string
    copyRight: string
    bgColor: string
    textColor: string
  }
}
