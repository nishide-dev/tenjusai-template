export type Stage = {
  performer: string
  description: string
  image: string
  date: string
  time: string
}

export const stages: Stage[] = [
  {
    performer: 'バンド1',
    description: 'Description',
    image: '/images/sample/blue-pastel.jpg',
    date: '9/7',
    time: '12:00 ~ 13:00',
  },
  {
    performer: 'バンド2',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    date: '9/7',
    time: '14:00 ~ 15:00',
  },
  {
    performer: 'バンド3',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    date: '9/8',
    time: '12:00 ~ 13:00',
  },
]
