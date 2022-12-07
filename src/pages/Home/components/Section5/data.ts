import { v4 as uuidv4 } from 'uuid';

import { Place } from '../../../../components/DestinationCard';

export type DestinationType = {
  id: string;
  title: string;
  places: Place[];
};

export const mockDestinations: DestinationType[] = [
  {
    id: uuidv4(),
    title: 'Vietnam',
    places: [
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_1.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_2.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_3.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_4.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_5.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Vietnam',
        des: 'Worefall',
        img: '/image/top_des/Vietnam/vietnam_6.png',
        rating: 3.5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'London',
    places: [
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_1.webp',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_2.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_3.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_4.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_5.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'London',
        des: 'Worefall',
        img: '/image/top_des/London/london_6.jpg',
        rating: 3.5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Thailand',
    places: [
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_1.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_2.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_3.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_4.png',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_5.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Thailand',
        des: 'Worefall',
        img: '/image/top_des/Thailand/thailand_6.jpg',
        rating: 3.5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Singapore',
    places: [
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_1.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_2.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_3.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_4.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_5.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Singapore',
        des: 'Worefall',
        img: '/image/top_des/Singapore/sin_6.png',
        rating: 3.5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Italy',
    places: [
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_1.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_2.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_3.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_4.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_5.jpg',
        rating: 3.5,
      },
      {
        id: uuidv4(),
        title: 'Italy',
        des: 'Worefall',
        img: '/image/top_des/Italy/italy_6.png',
        rating: 3.5,
      },
    ],
  },
];
