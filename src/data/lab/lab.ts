export type Lab = {
  name: string
  description: string
  image: string
  datetime: string
}

export const labs: Lab[] = [
  {
    name: 'Lab1',
    description: 'Description',
    image: '/images/sample/blue-pastel.jpg',
    datetime: '9/7 12:00 ~ 13:00',
  },
  {
    name: 'Lab2',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    datetime: '9/7 14:00 ~ 15:00',
  },
  {
    name: 'Lab3',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    datetime: '9/8 12:00 ~ 13:00',
  },
]
