import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import SocialIcon from '../../components/SocialIcon';
import { useResponsive } from '../../hooks/useResponsive';
import Container from '../Container';
import NavLink from '../Nav/NavLink';

type Props = {} & FlexProps;

const Footer = ({ ...props }: Props) => {
  const { isMobile, is3XLScreen, is2XLScreen } = useResponsive();
  return (
    <Flex mt='145px' mb='80px' {...props}>
      <Container
        direction={isMobile ? 'column' : 'row'}
        justifyContent='space-between'
      >
        <Flex direction='column' mr='2rem' maxW={isMobile ? 'unset' : '141px'}>
          <Flex>
            <Button variant='unstyled' display='flex' alignItems='center'>
              <Flex w='42px' h='35px'>
                <SVG src='/svg/logo.svg' />
              </Flex>
              <Text ml='0.5rem' fontWeight='bold' fontSize='lg'>
                Salty
              </Text>
            </Button>
          </Flex>

          <Text
            mt={'20px'}
            fontSize='md'
            fontWeight='medium'
            lineHeight='26px'
            color='#5B5F62'
          >
            Enjoy the touring with Salty
          </Text>
          <Flex mt={isMobile ? '20px' : '40px'}>
            <SocialIcon
              src='/svg/facebook.svg'
              iconSize={{ width: 6, height: 12 }}
            />
            <SocialIcon
              src='/svg/instagram.svg'
              ml='14px'
              iconSize={{ width: 12, height: 12 }}
            />
            <SocialIcon
              src='/svg/twitter.svg'
              iconSize={{ width: 15, height: 12 }}
              ml='14px'
            />
          </Flex>
        </Flex>
        <Flex
          wrap='wrap'
          mt={isMobile ? '64px' : '0px'}
          justifyContent='space-between'
          w={
            is3XLScreen
              ? '1040px'
              : is2XLScreen
              ? '906px'
              : isMobile
              ? 'full'
              : '749px'
          }
          gap='1rem'
        >
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Resources
            </Text>

            <NavLink
              mr='0px'
              mt='22px'
              title='Download'
              href=''
              direction='left'
            />
            <NavLink mr='0px' title='Help Center' href='' direction='left' />
            <NavLink mr='0px' title='Guide Book' href='' direction='left' />
            <NavLink mr='0px' title='App Directory' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Travellers
            </Text>

            <NavLink
              mr='0px'
              mt='22px'
              title='Why Trallers'
              href=''
              direction='left'
            />
            <NavLink mr='0px' title='Enterprise' href='' direction='left' />
            <NavLink
              mr='0px'
              title='Customer Stories'
              href=''
              direction='left'
            />
            <NavLink mr='0px' title='Instagram Post' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Company
            </Text>

            <NavLink
              mr='0px'
              mt='22px'
              title='Travelling'
              href=''
              direction='left'
            />
            <NavLink mr='0px' title='About Locato' href='' direction='left' />
            <NavLink mr='0px' title='Success' href='' direction='left' />
            <NavLink mr='0px' title='Information' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Get App
            </Text>

            <NavLink
              mr='0px'
              mt='22px'
              title='App Store'
              href=''
              direction='left'
            />
            <NavLink
              mr='0px'
              title='Google Play Store'
              href=''
              direction='left'
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
