import { Button, Flex, FlexProps, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import SocialIcon from '../../components/SocialIcon';
import { useResponsive } from '../../hooks/useResponsive';
import Container from '../Container';
import NavLink from '../Nav/NavLink';

type Props = {} & FlexProps;

const Footer = ({ ...props }: Props) => {
  const { is3XLScreen, is2XLScreen } = useResponsive();
  return (
    <Flex mt='145px' mb='80px' {...props}>
      <Container justifyContent='space-between'>
        <Flex direction='column' mr='2rem' maxW='141px'>
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
            mt='20px'
            fontSize='md'
            fontWeight='medium'
            lineHeight='26px'
            color='#5B5F62'
          >
            Enjoy the touring with Salty
          </Text>
          <Flex mt='40px'>
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
        <Grid
          w={is3XLScreen ? '1040px' : is2XLScreen ? '906px' : '749px'}
          templateColumns='1fr 1fr 1fr 1fr'
        >
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Resources
            </Text>

            <NavLink mt='22px' title='Download' href='' direction='left' />
            <NavLink title='Help Center' href='' direction='left' />
            <NavLink title='Guide Book' href='' direction='left' />
            <NavLink title='App Directory' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Travellers
            </Text>

            <NavLink mt='22px' title='Why Trallers' href='' direction='left' />
            <NavLink title='Enterprise' href='' direction='left' />
            <NavLink title='Customer Stories' href='' direction='left' />
            <NavLink title='Instagram Post' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Company
            </Text>

            <NavLink mt='22px' title='Travelling' href='' direction='left' />
            <NavLink title='About Locato' href='' direction='left' />
            <NavLink title='Success' href='' direction='left' />
            <NavLink title='Information' href='' direction='left' />
          </Flex>
          <Flex direction='column'>
            <Text fontWeight='semibold' fontSize='18px' lineHeight='18px'>
              Get App
            </Text>

            <NavLink mt='22px' title='App Store' href='' direction='left' />
            <NavLink title='Google Play Store' href='' direction='left' />
          </Flex>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Footer;
