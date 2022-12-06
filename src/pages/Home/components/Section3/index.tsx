import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React from 'react';

import ExpCard from '../../../../components/ExpCard';

type Props = {} & FlexProps;

const Section3 = ({ ...props }: Props) => {
  return (
    <Flex
      w='full'
      alignItems='center'
      justifyContent='space-between'
      mt='230px'
      {...props}
    >
      <Flex position='relative' w='490px' h='562px'>
        <Image src='/image/banner_2.png' fit='contain' />
        <Flex
          w='140px'
          h='218px'
          position='absolute'
          bottom='86px'
          left='-58px'
        >
          <Image src='/image/banner_2_card_1.png' fit='contain' />
        </Flex>
        <Flex w='171px' h='92px' position='absolute' bottom='-18px' right='0px'>
          <Image src='/image/banner_2_card_2.png' fit='contain' />
        </Flex>
      </Flex>
      <Flex direction='column'>
        <Flex direction='column' maxW='467px'>
          <Text
            color='#F66F4D'
            fontSize='1.25rem'
            fontWeight='semibold'
            letterSpacing='0.2em'
          >
            Our Experience
          </Text>
          <Text
            mt='1rem'
            fontSize='56px'
            fontWeight='semibold'
            lineHeight='66px'
          >
            Our Stories Have Adventures
          </Text>
          <Text mt='1rem' fontSize='md' fontWeight='medium' color='#5B5F62'>
            We are experienced in bringing adventures to stay their journey,
            with all outdoor destinations in the world as our specialties. Start
            your adventure now! Nature has already called you!
          </Text>
        </Flex>
        <Flex mt='2.5rem'>
          <ExpCard title='12K+' des='Success Journey' />
          <ExpCard title='16+' des='Awards Winning' />
          <ExpCard title='20+' des='Years Of Experience' />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section3;
