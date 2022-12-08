import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import DestinationCard from '../../../../components/DestinationCard';
import { useResponsive } from '../../../../hooks/useResponsive';
import { DestinationType, mockDestinations } from './data';

type Props = {} & FlexProps;

const Section5 = ({ ...props }: Props) => {
  const [destination, setDestination] = useState<DestinationType | undefined>(
    mockDestinations.find((item) => item.title === 'Vietnam')
  );
  const { isMobileOrTablet, is2XLScreen, is3XLScreen, isMobile } =
    useResponsive();
  return (
    <Flex mt='140px' direction='column' w='full' alignItems='center' {...props}>
      <Text
        fontWeight='semibold'
        fontSize={isMobileOrTablet ? '36px' : '56px'}
        lineHeight='66px'
      >
        Top Destinations
      </Text>
      <Text fontWeight='medium' fontSize='md' color='#5B5F62'>
        Sost Brilliant reasons Entrada should be your one-stop-shop!
      </Text>
      <Flex
        mt={isMobileOrTablet ? '1rem' : '1.5rem'}
        w={isMobile ? 'full' : 'auto'}
      >
        {isMobile ? (
          <Swiper
            spaceBetween={12}
            style={{ width: '100%' }}
            slidesPerView='auto'
            modules={[FreeMode]}
            freeMode
            className='mySwiper'
          >
            {mockDestinations.map((item) => (
              <SwiperSlide style={{ width: 'auto' }} key={item.id}>
                <Button
                  background={
                    destination?.title === item.title
                      ? '#2D3134'
                      : 'transparent'
                  }
                  color={
                    destination?.title === item.title ? '#FFFFFF' : '#2D3134'
                  }
                  p='10px 20px'
                  borderRadius='2rem'
                  h='auto'
                  border='1px solid #2D3134'
                  variant='unstyled'
                  key={item.id}
                  onClick={() => setDestination(item)}
                >
                  <Text fontSize='14px' fontWeight='medium' lineHeight='14px'>
                    {item.title}
                  </Text>
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          mockDestinations.map((item) => (
            <Button
              css={css`
                &:not(:first-child) {
                  margin-left: 1rem;
                }
              `}
              _hover={{
                background: '#2D3134',
                color: '#FFFFFF',
              }}
              background={
                destination?.title === item.title ? '#2D3134' : 'transparent'
              }
              color={destination?.title === item.title ? '#FFFFFF' : '#2D3134'}
              p='10px 20px'
              borderRadius='2rem'
              h='auto'
              border='1px solid #2D3134'
              variant='unstyled'
              key={item.id}
              onClick={() => setDestination(item)}
            >
              <Text fontSize='14px' fontWeight='medium' lineHeight='14px'>
                {item.title}
              </Text>
            </Button>
          ))
        )}
      </Flex>
      <Flex mt='50px' w='full'>
        {destination &&
          destination.places.length >= 6 &&
          (!isMobileOrTablet ? (
            <Flex
              justifyContent='space-between'
              w='full'
              h={is3XLScreen ? '655px' : is2XLScreen ? '587px' : '526px'}
            >
              <Flex
                direction='column'
                justifyContent='space-between'
                w='22%'
                h='full'
              >
                <DestinationCard place={destination.places[0]} h='47%' />
                <DestinationCard place={destination.places[1]} h='47%' />
              </Flex>
              <Flex w='32%' h='full'>
                <DestinationCard place={destination.places[2]} />
              </Flex>
              <Flex
                h='full'
                w='42%'
                direction='column'
                justifyContent='space-between'
              >
                <DestinationCard place={destination.places[3]} h='47%' />
                <Flex justifyContent='space-between' h='50%' w='full'>
                  <DestinationCard place={destination.places[4]} w='37%' />
                  <DestinationCard place={destination.places[5]} w='57%' />
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Swiper
              style={{ paddingBottom: 40 }}
              modules={[Pagination, Autoplay]}
              slidesPerView='auto'
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              centeredSlides
              className='mySwiper'
            >
              {destination.places.map((item) => (
                <SwiperSlide key={item.id}>
                  <DestinationCard
                    place={item}
                    h={isMobile ? '250px' : '500px'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
      </Flex>
    </Flex>
  );
};

export default Section5;
