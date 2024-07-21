import { ContentsType } from '@/contents/contents-type'

export const contents = {
  pages: {
    home: {
      title: '天樹祭',
      th: 41,
      bgImage: '/images/sample/blue-pastel.jpg',
      bgOpacity: 'bg-opacity-30',
      bgColor: 'bg-sky-300',
    },
  },
  pamphlet: {
    title: 'パンフレットはこちら',
    url: 'https://example.com',
  },
  style: {
    bgColorForgroundLight: 'bg-gray-100',
    bgColorForgroundDark: 'bg-gray-900',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
    textColorForgroundLight: 'text-black',
    textColorForgroundDark: 'text-white',
    lightColor: 'light',
    darkColor: 'dark', // ルートカラーを変更する場合は、ここを変更
  },
  header: {
    title: '天樹祭',
    stage: 'ステージ',
    event: 'イベント',
    lab: '研究室',
    stall: '屋台',
  },
} as const satisfies Partial<ContentsType>
