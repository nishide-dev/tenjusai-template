export type ContentsType = {
  style: {
    bgColorForgroundLight: 'bg-gray-100' | 'bg-gray-900'
    bgColorForgroundDark: 'bg-gray-100' | 'bg-gray-900'
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
}