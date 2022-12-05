import { Button, ButtonProps, ColorProps, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

type NavLinkType = {
  title: string;
  href: string;
  textColor?: ColorProps['color'];
} & ButtonProps;

const NavLink = ({ title, href, textColor, ...props }: NavLinkType) => {
  return (
    <Button
      css={css`
        &:not(last-child) {
          margin-right: 0.5rem;
        }
      `}
      variant='ghost'
      colorScheme='blackAlpha'
      {...props}
    >
      <Link to={href}>
        <Text fontWeight='medium' color={textColor ?? '#2E476B'}>
          {title}
        </Text>
      </Link>
    </Button>
  );
};

export default NavLink;
