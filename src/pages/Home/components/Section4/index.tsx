import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import PopularDestinationCard from '../../../../components/PopularDestinationCard';

type Props = {} & FlexProps;

export type PopularDestinationType = {
  id: string;
  img: string;
  title: string;
  des: string;
  price: number;
  href?: string;
};

const popularDestinations: PopularDestinationType[] = [
  {
    id: uuidv4(),
    img: '/image/popular_des/hiking_tour.png',
    title: 'Mountain Hiking Tour',
    des: 'Mountain Hiking Tour',
    price: 89,
  },
  {
    id: uuidv4(),
    img: '/image/popular_des/machu_picchu.png',
    title: 'Machu Picchu, Peru',
    des: 'Machu Picchu, Peru',
    price: 99,
  },
  {
    id: uuidv4(),
    img: '/image/popular_des/the_grand_canyon.png',
    title: 'The Grand Canyon, Arizona',
    des: 'The Grand Canyon, Arizona',
    price: 70,
  },
  {
    id: uuidv4(),
    img: '/image/popular_des/rome.jpg',
    title: 'Rome, Italy',
    des: 'Rome, Italy',
    price: 99,
  },
];

const Section4 = ({ ...props }: Props) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <Flex mt='6rem' direction='column' {...props}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text
          maxW='400px'
          fontWeight='semibold'
          fontSize='56px'
          lineHeight='66px'
        >
          Find Popular Destination
        </Text>
        <Flex alignItems='center'>
          <Button
            ref={(node) => setPrevEl(node)}
            css={css`
              &:hover {
                background: #2d3134;
                & svg {
                  stroke: #faf8ed;
                }
              }
            `}
            variant='unstyled'
            h='auto'
            p='21px 24px'
            border='1px solid #2d3134'
            borderRadius='full'
          >
            <Flex w='6px' h='12px'>
              <SVG src='/svg/prev_arrow.svg' stroke='#2d3134' />
            </Flex>
          </Button>
          <Button
            ref={(node) => setNextEl(node)}
            css={css`
              &:hover {
                background: #2d3134;
                & svg {
                  stroke: #faf8ed;
                }
              }
            `}
            variant='unstyled'
            h='auto'
            p='21px 24px'
            border='1px solid #2d3134'
            borderRadius='full'
            ml='1rem'
          >
            <Flex w='6px' h='12px'>
              <SVG src='/svg/next_arrow.svg' stroke='#2d3134' />
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Swiper
        style={{ width: '100%', marginTop: '2rem' }}
        slidesPerView='auto'
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={{ prevEl, nextEl }}
        loop
        centeredSlides
        className='mySwiper'
      >
        {popularDestinations.map((item) => (
          <SwiperSlide style={{ width: 386 }} key={item.id}>
            <PopularDestinationCard
              img={item.img}
              title={item.title}
              price={item.price}
              href={item.href}
              des={item.des}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Section4;
