import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React from 'react';

import ExpCard from '../../../../components/ExpCard';
import { useResponsive } from '../../../../hooks/useResponsive';

type Props = {} & FlexProps;

const Section3 = ({ ...props }: Props) => {
  const { isMobileOrTablet, is2XLScreen, is3XLScreen } = useResponsive();
  return (
    <Flex
      direction={isMobileOrTablet ? 'column-reverse' : 'row'}
      w='full'
      alignItems='center'
      justifyContent='space-between'
      mt={isMobileOrTablet ? '80px' : '230px'}
      {...props}
    >
      <Flex
        position='relative'
        w={isMobileOrTablet ? '327px' : '490px'}
        h={isMobileOrTablet ? '358px' : '562px'}
        mt={isMobileOrTablet ? '22px' : '0px'}
      >
        <Image src='/image/banner/banner_2.png' fit='contain' />
        {!isMobileOrTablet && (
          <>
            <Flex
              w='140px'
              h='218px'
              position='absolute'
              bottom='86px'
              left='-58px'
            >
              <Image src='/image/banner/banner_2_card_1.png' fit='contain' />
            </Flex>
            <Flex
              w='171px'
              h='92px'
              position='absolute'
              bottom='-18px'
              right='0px'
            >
              <Image src='/image/banner/banner_2_card_2.png' fit='contain' />
            </Flex>
          </>
        )}
      </Flex>
      <Flex direction='column'>
        <Flex
          direction='column'
          maxW={is3XLScreen ? '684px' : is2XLScreen ? '569px' : '467px'}
        >
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
            fontSize={isMobileOrTablet ? '36px' : '56px'}
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
        <Flex mt='2.5rem' direction={isMobileOrTablet ? 'column' : 'row'}>
          <Flex w='full'>
            <ExpCard
              title='12K+'
              des='Success Journey'
              w={isMobileOrTablet ? 'full' : 'initial'}
            />
            <ExpCard
              title='16+'
              des='Awards Winning'
              w={isMobileOrTablet ? 'full' : 'initial'}
              ml={isMobileOrTablet ? '14px' : '20px'}
            />
          </Flex>
          <ExpCard
            title='20+'
            des='Years Of Experience'
            w={isMobileOrTablet ? 'full' : 'initial'}
            ml={isMobileOrTablet ? '0px' : '20px'}
            mt={isMobileOrTablet ? '14px' : '0px'}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section3;
