import { ContentsType } from '@/contents/contents-type'

export const contents = {
  style: {
    bgColorForgroundLight: 'bg-gray-100',
    bgColorForgroundDark: 'bg-gray-900',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
    textColorForgroundLight: 'text-black',
    textColorForgroundDark: 'text-white',
    lightColor: 'light',
    darkColor: 'light', // ルートカラーを変更する場合は、ここを変更
  },
  header: {
    title: '天樹際',
    stage: 'ステージ',
    event: 'イベント',
    lab: '研究室',
    stall: '屋台',
  },
} as const satisfies Partial<ContentsType>
