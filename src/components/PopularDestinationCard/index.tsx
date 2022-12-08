import { Button, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import { PopularDestinationType } from '../../pages/Home/components/Section4';

type Props = {} & PopularDestinationType & FlexProps;

const PopularDestinationCard = ({
  title,
  des,
  href,
  price,
  img,
  id,
  ...props
}: Props) => {
  return (
    <Flex
      direction='column'
      borderRadius='1rem'
      border='2px solid #FFFFFF'
      p='12px 12px 36px 12px'
      boxShadow='0px 6px 12px rgba(192, 188, 161, 0.22)'
      {...props}
    >
      <Flex
        css={css`
          &:hover .card_hover {
            opacity: 1;
          }
        `}
        position='relative'
        w='full'
        h='252px'
      >
        <Image borderRadius='1rem' src={img} fit='cover' />
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
      <Text
        mt='1.5rem'
        fontSize='1.5rem'
        lineHeight='1.5rem'
        fontWeight='semibold'
      >
        {title}
      </Text>
      <Text
        mt='14px'
        fontSize='14px'
        fontWeight='medium'
        lineHeight='14px'
        color='#5B5F62'
      >
        {des}
      </Text>
      <Flex
        mt='1.5rem'
        justifyContent='space-between'
        alignItems='center'
        w='full'
      >
        <Flex alignItems='center'>
          <Text fontSize='1.5rem' fontWeight='semibold'>
            ${price}
          </Text>
          <Text ml='0.5rem' fontSize='1rem' fontWeight='medium' color='#5B5F62'>
            /Person
          </Text>
        </Flex>
        <Button
          _hover={{
            color: 'white',
            background: '#2D3134',
          }}
          variant='unstyled'
          h='auto'
          p='0.75rem 1rem'
          border='1px solid #2D3134'
          borderRadius='2rem'
        >
          <Text fontSize='14px' fontWeight='medium'>
            Book Now
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default PopularDestinationCard;
