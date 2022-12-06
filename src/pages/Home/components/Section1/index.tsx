import { Button, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & FlexProps;

const Section1 = ({ ...props }: Props) => {
  const { isMobileOrTablet } = useResponsive();
  return (
    <Flex
      id='section1'
      direction={isMobileOrTablet ? 'column' : 'row'}
      alignItems='center'
      justifyContent='space-between'
      gap='2rem'
      {...props}
    >
      <Flex direction='column' maxW='557px'>
        <Text fontSize='84px' fontWeight='bold' lineHeight='86px'>
          Discover the Best Lovely Places
        </Text>
        <Text mt='1.5rem'>
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </Text>
        <Flex
          borderRadius='2rem'
          background='#FDFEFF'
          padding='11px 20px 11px 28px'
          mt='2.5rem'
        >
          <Flex direction='column' pr='34px' borderRight='1px solid #EAEAEB'>
            <Text fontWeight='semibold' fontSize='18px'>
              Where
            </Text>
            <Flex alignItems='center'>
              <Text
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                color='#9498A4'
                fontWeight='medium'
                fontSize='12px'
                maxW='96px'
              >
                Center Point, Los Angeles
              </Text>
              <Flex w='9px' h='13px' ml='2rem'>
                <SVG src='/svg/location.svg' fill='#F66F4D' />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignItems='center'
            pl='34px'
            justifyContent='space-between'
            w='full'
          >
            <Flex direction='column'>
              <Text fontWeight='semibold' fontSize='18px'>
                Date
              </Text>
              <Flex alignItems='center'>
                <Text color='#9498A4' fontWeight='medium' fontSize='12px'>
                  09th March,2021
                </Text>
                <Flex w='13px' h='13px' ml='2rem'>
                  <SVG src='/svg/calendar.svg' fill='#F66F4D' />
                </Flex>
              </Flex>
            </Flex>
            <Button
              _hover={{
                background: 'rgba(246, 111, 77,70%)',
              }}
              variant='unstyled'
              h='auto'
              borderRadius='full'
              background='#F66F4D'
              p='0.75rem'
            >
              <Flex w='28px' h='28px'>
                <SVG src='/svg/search.svg' fill='transparent' />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex w='469px' h='555px' position='relative'>
        <Image src='/image/banner_1.png' fit='contain' />
        <Flex w='149px' h='160px' position='absolute' bottom='0' left='-58px'>
          <Image src='/image/banner_1_card.png' fit='contain' />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section1;
