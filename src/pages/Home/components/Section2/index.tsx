import 'swiper/css';

import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import CategoryCard from '../../../../components/CategoryCard';
import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & FlexProps;

export type CategoryType = {
  id: string;
  title: string;
  img: string;
  href?: string;
};

const categories: CategoryType[] = [
  { id: uuidv4(), title: 'Beach', img: '/image/categories/beach.png' },
  { id: uuidv4(), title: 'Desert', img: '/image/categories/desert.png' },
  { id: uuidv4(), title: 'Mountain', img: '/image/categories/mountain.png' },
  { id: uuidv4(), title: 'Temple', img: '/image/categories/temple.png' },
  { id: uuidv4(), title: 'Tower', img: '/image/categories/tower.png' },
  { id: uuidv4(), title: 'Pyramid', img: '/image/categories/pyramid.png' },
];

const Section2 = ({ ...props }: Props) => {
  const { isMobileOrTablet } = useResponsive();
  return (
    <Flex
      mt={isMobileOrTablet ? '110px' : '40px'}
      direction='column'
      textAlign={isMobileOrTablet ? 'center' : 'left'}
      alignItems={isMobileOrTablet ? 'center' : 'flex-start'}
      {...props}
    >
      <Text
        fontSize={isMobileOrTablet ? '34px' : '56px'}
        fontWeight={isMobileOrTablet ? 'bold' : 'semibold'}
        lineHeight={isMobileOrTablet ? '44.2px' : '56px'}
      >
        Categories
      </Text>
      <Text
        maxW='370px'
        mt='1rem'
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
          <SwiperSlide style={{ width: 170 }} key={item.id}>
            <CategoryCard title={item.title} img={item.img} id={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Section2;
