import {
  Button,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  Text,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import SVG from 'react-inlinesvg';

export type Place = {
  id: string;
  img: string;
  rating: number;
  title: string;
  des: string;
};

type DestinationCardType = { image?: ImageProps; place: Place } & FlexProps;

const DestinationCard = ({ place, image, ...props }: DestinationCardType) => {
  return (
    <Flex
      css={css`
        &:hover .card_hover {
          opacity: 1;
        }
      `}
      w='full'
      h='full'
      position='relative'
      {...props}
    >
      <Image
        w='full'
        src={place.img}
        fit='cover'
        borderRadius='20px'
        {...image}
      />
      <Flex
        direction='column'
        position='absolute'
        w='full'
        h='full'
        top='0px'
        left='0px'
        p='1.5rem'
        justifyContent='space-between'
      >
        <Flex>
          <Flex p='5px 10px' background='white' borderRadius='2rem'>
            <Text fontSize='14px' fontWeight={500} lineHeight='14px'>
              {place.rating}
            </Text>
          </Flex>
        </Flex>
        <Flex direction='column'>
          <Text
            fontWeight='semibold'
            fontSize='20px'
            lineHeight='20px'
            color='white'
          >
            {place.title}
          </Text>
          <Text
            mt='10px'
            fontWeight='normal'
            fontSize='14px'
            lineHeight='14px'
            color='white'
          >
            {place.des}
          </Text>
        </Flex>
      </Flex>
      <Button
        className='card_hover'
        variant='unstyled'
        position='absolute'
        top='0px'
        left='0px'
        opacity={0}
        borderRadius='1rem'
        h='full'
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
        background='blackAlpha.600'
      >
        <Flex w='24px' h='24px'>
          <SVG src='/svg/search.svg' fill='transparent' />
        </Flex>
      </Button>
    </Flex>
  );
};

export default DestinationCard;
