import { ContentsType } from '@/contents/contents-type'

import { stages } from '@/data/stage/stage'
import { events } from '@/data/event/event'
import { labs } from '@/data/lab/lab'
import { stalls } from '@/data/stall/stall'

export const contents = {
  pages: {
    home: {
      title: '天樹祭',
      th: 41,
      bgImage: '/images/sample/tenju.jpg',
      bgOpacity: 'bg-opacity-100',
      bgColor: 'bg-none',
      dark: false,
    },
    stage: {
      stages: stages,
    },
    event: {
      events: events,
    },
    lab: {
      labs: labs,
    },
    stall: {
      stalls: stalls,
    },
  },
  pamphlet: {
    title: 'パンフレットはこちら',
    url: 'https://example.com',
  },
  style: {
    bgColorForgroundLight: 'bg-white',
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
  footer: {
    title: '天樹祭 2024',
    description: '豊田工業大学 大学祭',
    copyRight: '© 2024 豊田工業大学 天樹祭実行委員会',
    bgColor: 'bg-black',
    textColor: 'text-gray-100',
  },
} as const satisfies Partial<ContentsType>
