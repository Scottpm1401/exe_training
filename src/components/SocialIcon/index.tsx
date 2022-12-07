import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import SVG from 'react-inlinesvg';

type SocialIconType = {
  src: string;
  iconSize?: {
    height: number;
    width: number;
  };
} & ButtonProps;

const SocialIcon = ({ src, iconSize, ...props }: SocialIconType) => {
  return (
    <Button
      css={css`
        svg {
          fill: #5b5f62;
        }
        &:hover {
          border-color: #f66f4d;
          svg {
            fill: #f66f4d;
          }
        }
      `}
      variant='unstyled'
      w='32px'
      h='32px'
      minW='auto'
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderRadius='full'
      border='1px solid #5B5F62'
      {...props}
    >
      <SVG
        style={{
          width: iconSize?.width ?? 12,
          height: iconSize?.height ?? 12,
          transition: 'all 200ms ease-in-out',
        }}
        src={src}
      />
    </Button>
  );
};

export default SocialIcon;
