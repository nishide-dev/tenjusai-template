export type Event = {
  name: string
  description: string
  image: string
  datetime: string
}

export const events: Event[] = [
  {
    name: 'Event1',
    description: 'Description',
    image: '/images/sample/blue-pastel.jpg',
    datetime: '9/7 12:00 ~ 13:00',
  },
  {
    name: 'Event2',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    datetime: '9/7 14:00 ~ 15:00',
  },
  {
    name: 'Event3',
    description: 'Description',
    image: '/images/sample/pink-pastel.jpg',
    datetime: '9/8 12:00 ~ 13:00',
  },
]
