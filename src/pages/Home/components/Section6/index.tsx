import { Button, Flex, Grid, GridProps, Image, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & GridProps;

const Section6 = ({ ...props }: Props) => {
  const { isMobileOrTablet } = useResponsive();
  return (
    <Grid
      templateColumns={isMobileOrTablet ? 'auto' : '1fr 1fr'}
      justifyContent='center'
      mt='132px'
      {...props}
    >
      {!isMobileOrTablet && (
        <Flex justifyContent='center'>
          <Image src='/image/banner/banner_3.png' fit='contain' />
        </Flex>
      )}

      <Flex direction='column'>
        <Flex
          w='67px'
          h='8px'
          borderRadius='4px'
          background='linear-gradient(159.99deg, #FFD482 13.35%, #FFBE82 118.92%)'
          boxShadow='0px 2px 6px rgba(229, 137, 24, 0.15)'
        />
        <Text
          mt={isMobileOrTablet ? '0px' : '12px'}
          fontSize={isMobileOrTablet ? '36px' : '56px'}
          fontWeight='semibold'
          lineHeight='66px'
        >
          A Customer Said About Us:
        </Text>
        <Flex
          mt={isMobileOrTablet ? '0px' : '26px'}
          direction='column'
          borderRadius='14px'
          background='white'
          w='full'
          p='30px'
        >
          <Text fontSize='18px' fontWeight='medium' lineHeight='30px'>
            Salty helped me a lot in finding the best place for our first
            outdoor adventure trip. They responded very quickly and gave me a
            detailed account of the place—its history, as well as its best
            features.
          </Text>
          <Flex
            css={css`
              svg {
                width: 18.55px;
                height: 17px;
                fill: #ffc14b;
                &:not(:first-child) {
                  margin-left: 4px;
                }
              }
            `}
            mt='24px'
          >
            <SVG src='/svg/star.svg' />
            <SVG src='/svg/star.svg' />
            <SVG src='/svg/star.svg' />
            <SVG src='/svg/star.svg' />
            <SVG src='/svg/star.svg' />
          </Flex>
          <Text
            mt='1rem'
            fontSize='20px'
            fontWeight='semibold'
            lineHeight='20px'
          >
            Andrew Sarma
          </Text>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text fontSize='12px' fontWeight='medium' lineHeight='12px'>
              Enterpreneur
            </Text>
            <Flex alignItems='center'>
              <Button
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
                p='16px 18px'
                border='1px solid #2d3134'
                borderRadius='full'
              >
                <Flex w='6px' h='12px'>
                  <SVG src='/svg/prev_arrow.svg' stroke='#2d3134' />
                </Flex>
              </Button>
              <Button
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
                p='16px 18px'
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
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Section6;
