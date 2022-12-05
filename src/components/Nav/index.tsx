import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import Container from '../Container';
import NavLink from './NavLink';

type Props = {} & FlexProps;

const Nav = (props: Props) => {
  return (
    <Flex w='full' h='72px'>
      <Container justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Flex alignItems='center'>
            <Flex w='42px' h='35px'>
              <SVG src='/svg/logo.svg' />
            </Flex>
            <Text ml='0.5rem' fontWeight='bold' fontSize='lg'>
              Salty
            </Text>
          </Flex>
          <Flex ml='2rem'>
            <NavLink title={'Home'} href={'/'} />
            <NavLink title={'About us'} href={'/about'} />
            <NavLink title={'Destinations'} href={'/destinations'} />
            <NavLink title={'Tour'} href={'/tour'} />
            <NavLink title={'Blog'} href={'/blog'} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Nav;
