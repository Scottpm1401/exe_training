import 'swiper/css';

import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryCard from '../../../../components/CategoryCard';

type Props = {} & FlexProps;

export type CategoryType = {
  title: string;
  img: string;
  href?: string;
};

const categories: CategoryType[] = [
  {
    title: 'Beach',
    img: '/image/beach.png',
  },
  {
    title: 'Desert',
    img: '/image/desert.png',
  },
  {
    title: 'Mountain',
    img: '/image/mountain.png',
  },
  {
    title: 'Temple',
    img: '/image/temple.png',
  },
  {
    title: 'Tower',
    img: '/image/tower.png',
  },
  {
    title: 'Pyramid',
    img: '/image/pyramid.png',
  },
];

const Section2 = ({ ...props }: Props) => {
  return (
    <Flex direction='column' {...props}>
      <Text fontSize='56px' fontWeight='semibold'>
        Categories
      </Text>
      <Text
        mt='1rem'
        maxW='370px'
        fontSize='md'
        fontWeight='medium'
        color='#5B5F62'
      >
        Here are lots of interesting destinations to visit, but don’t be
        confused—they’re already grouped by category.
      </Text>
      <Swiper
        style={{ width: '100%', marginTop: '40px' }}
        slidesPerView='auto'
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop
        centeredSlides
        grabCursor
        className='mySwiper'
      >
        {categories.map((item) => (
          <SwiperSlide style={{ width: 170 }} key={item.title}>
            <CategoryCard title={item.title} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Section2;
