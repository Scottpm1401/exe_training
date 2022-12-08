import {
  Button,
  ButtonProps,
  ColorProps,
  Flex,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

type NavLinkType = {
  title: string;
  href: string;
  textProps?: TextProps;
  direction?: 'left' | 'center';
} & ButtonProps;

const NavLink = ({
  title,
  href,
  textProps,
  direction = 'center',
  ...props
}: NavLinkType) => {
  return (
    <Button
      css={css`
        &:not(last-child) {
          margin-right: 2rem;
        }
        &:hover .underline {
          width: 100%;
        }
      `}
      display='flex'
      justifyContent={direction === 'center' ? 'center' : 'flex-start'}
      variant='unstyled'
      {...props}
    >
      <Link
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: direction === 'center' ? 'center' : 'flex-start',
          alignItems: direction === 'center' ? 'center' : 'flex-start',
        }}
        to={href}
      >
        <Text fontWeight='medium' color='#2E476B' {...textProps}>
          {title}
        </Text>
        <Flex
          className='underline'
          h='2px'
          w='0px'
          transition='all 300ms ease-in-out'
          background='#F66F4D'
        />
      </Link>
    </Button>
  );
};

export default NavLink;
