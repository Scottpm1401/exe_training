import { Button, Flex, FlexProps, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & FlexProps;

const NewSletter = ({ ...props }: Props) => {
  const { isMobile } = useResponsive();
  return (
    <Flex
      position='relative'
      mt='124px'
      background='#FFD482'
      borderRadius='30px'
      w='full'
      h={isMobile ? '392px' : '358px'}
      p={isMobile ? '24px' : '0px'}
      textAlign={isMobile ? 'center' : 'left'}
      {...props}
    >
      <Flex
        position='absolute'
        w='full'
        h='full'
        top='0px'
        left='0px'
        zIndex={1}
      >
        <Image w='full' h='full' src='/image/intersect.png' />
      </Flex>
      <Flex
        direction='column'
        w='full'
        h='full'
        justifyContent='center'
        alignItems='center'
        zIndex={2}
      >
        <Text
          fontWeight='semibold'
          fontSize={isMobile ? '32px' : '40px'}
          lineHeight='40px'
          letterSpacing='0.0015em'
        >
          Sign up to our newsletter
        </Text>
        <Text
          mt='1rem'
          fontSize='md'
          fontWeight='normal'
          lineHeight='26px'
          color='#5B5F62'
        >
          Recieve latest news, update, and many other things every week.
        </Text>
        <Flex
          _placeholder={{
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 14,
            color: '#5B5F62',
          }}
          fontSize='14px'
          mt={isMobile ? '80px' : '40px'}
          w={isMobile ? 'full' : '450px'}
          background='white'
          padding='10px 12px'
          borderRadius='12px'
        >
          <Input
            variant='unstyled'
            pl='14px'
            placeholder='Enter Your Email Address'
          />

          <Button
            variant='unstyled'
            _hover={{
              opacity: 0.6,
            }}
            w='40px'
            p='0'
            boxShadow='0px 5px 14px rgba(247, 103, 67, 0.25)'
            background='#F66F4D'
            borderRadius='12px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <SVG
              style={{
                width: 15.83,
                height: 17.08,
                fill: 'white',
              }}
              src='/svg/paper_flight.svg'
            />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSletter;
