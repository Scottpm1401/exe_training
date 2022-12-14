import { Button, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & FlexProps;

const Section1 = ({ ...props }: Props) => {
  const { isMobileOrTablet, is2XLScreen, is3XLScreen } = useResponsive();
  return (
    <Flex
      direction={isMobileOrTablet ? 'column' : 'row'}
      alignItems='center'
      justifyContent='space-between'
      gap='2rem'
      {...props}
    >
      <Flex
        direction='column'
        maxW={is3XLScreen ? '808px' : is2XLScreen ? '728px' : '557px'}
        //   justifyContent={isMobileOrTablet ? 'center' : 'flex-start'}
        textAlign={isMobileOrTablet ? 'center' : 'left'}
      >
        <Text
          fontSize={isMobileOrTablet ? '34px' : '84px'}
          fontWeight='bold'
          lineHeight={isMobileOrTablet ? '44.2px' : '86px'}
        >
          Discover the Best Lovely Places
        </Text>
        <Text mt='1.5rem' maxW='500px'>
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </Text>
        <Flex
          borderRadius='full'
          background={isMobileOrTablet ? 'transparent' : '#FDFEFF'}
          padding='11px 20px 11px 28px'
          mt='2.5rem'
          maxW='500px'
          direction={isMobileOrTablet ? 'column' : 'row'}
        >
          <Flex
            pr='34px'
            borderRight={!isMobileOrTablet ? '1px solid #EAEAEB' : 'none'}
            borderRadius={isMobileOrTablet ? 'full' : 'inherit'}
            background={!isMobileOrTablet ? 'transparent' : '#FDFEFF'}
            p={isMobileOrTablet ? '18px 20px' : '0px'}
            justifyContent='space-between'
            alignItems='center'
          >
            <Flex direction='column'>
              <Text fontWeight='semibold' fontSize='18px' textAlign='left'>
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
                {!isMobileOrTablet && (
                  <Flex w='9px' h='13px' ml='2rem'>
                    <SVG src='/svg/location.svg' fill='#F66F4D' />
                  </Flex>
                )}
              </Flex>
            </Flex>

            {isMobileOrTablet && (
              <Flex w='25.11px' h='35px'>
                <SVG src='/svg/location.svg' fill='#F66F4D' />
              </Flex>
            )}
          </Flex>
          <Flex
            direction={isMobileOrTablet ? 'column' : 'row'}
            alignItems='center'
            pl={isMobileOrTablet ? '0px' : '34px'}
            mt={isMobileOrTablet ? '0.5rem' : '0px'}
            justifyContent='space-between'
            w='full'
          >
            <Flex
              direction={isMobileOrTablet ? 'row' : 'column'}
              background={!isMobileOrTablet ? 'transparent' : '#FDFEFF'}
              borderRadius={isMobileOrTablet ? 'full' : 'inherit'}
              p={isMobileOrTablet ? '18px 20px' : '0px'}
              justifyContent='space-between'
              w='full'
              alignItems='center'
            >
              <Flex direction='column'>
                <Text fontWeight='semibold' fontSize='18px' textAlign='left'>
                  Date
                </Text>
                <Flex alignItems='center'>
                  <Text color='#9498A4' fontWeight='medium' fontSize='12px'>
                    09th March,2021
                  </Text>
                  {!isMobileOrTablet && (
                    <Flex w='13px' h='13px' ml='2rem'>
                      <SVG src='/svg/calendar.svg' fill='#F66F4D' />
                    </Flex>
                  )}
                </Flex>
              </Flex>
              {isMobileOrTablet && (
                <Flex w='33px' h='33px'>
                  <SVG src='/svg/calendar.svg' fill='#F66F4D' />
                </Flex>
              )}
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
              mt={isMobileOrTablet ? '0.5rem' : '0px'}
            >
              <Flex w='28px' h='28px'>
                <SVG src='/svg/search.svg' fill='transparent' />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={isMobileOrTablet ? '327px' : '469px'}
        h={isMobileOrTablet ? '382px' : '555px'}
        position='relative'
      >
        <Image src='/image/banner/banner_1.png' fit='contain' alt='banner1' />
        {!isMobileOrTablet && (
          <Flex w='149px' h='160px' position='absolute' bottom='0' left='-58px'>
            <Image
              src='/image/banner/banner_1_card.png'
              fit='contain'
              alt='banner1_card'
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Section1;
