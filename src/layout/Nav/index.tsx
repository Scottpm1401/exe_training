import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';

import Container from '../Container';
import NavLink from './NavLink';

type Props = {} & FlexProps;

const OFFSET = 40;

const Nav = (props: Props) => {
  const [isTop, setIsTop] = useState(true);
  const scrollEvent = useCallback(() => {
    const section1 = document.getElementById('section1');
    if (section1) {
      const rect = section1.getBoundingClientRect();
      if (rect.top <= -OFFSET) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    }
  }, []);

  useEffect(() => {
    if (document) {
      document.addEventListener('scroll', scrollEvent);
    }

    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <Flex
      position='sticky'
      top='0px'
      left='0px'
      w='full'
      h='72px'
      background={isTop ? 'transparent' : '#FAEEAB'}
      zIndex={99}
    >
      <Container justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Button variant='unstyled' display='flex' alignItems='center'>
            <Flex w='42px' h='35px'>
              <SVG src='/svg/logo.svg' />
            </Flex>
            <Text ml='0.5rem' fontWeight='bold' fontSize='lg'>
              Salty
            </Text>
          </Button>
          <Flex ml='3rem'>
            <NavLink title={'Home'} href={'/'} />
            <NavLink title={'About us'} href={'/about'} />
            <NavLink title={'Destinations'} href={'/destinations'} />
            <NavLink title={'Tour'} href={'/tour'} />
            <NavLink title={'Blog'} href={'/blog'} />
          </Flex>
        </Flex>

        <Button
          _hover={{
            background: 'rgba(246, 111, 77,10%)',
          }}
          variant='unstyled'
          color='#F66F4D'
          display='flex'
          alignItems='center'
          padding='0.75rem 2rem'
          h='auto'
          border='1.5px solid #F66F4D'
          borderRadius='2rem'
        >
          <Text fontWeight={500} fontSize='medium'>
            Book Now
          </Text>
          <Flex w='16px' h='15px' ml='0.5rem'>
            <SVG fill='#F66F4D' src='/svg/paper_flight.svg' />
          </Flex>
        </Button>
      </Container>
    </Flex>
  );
};

export default Nav;
