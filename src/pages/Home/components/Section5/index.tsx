import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useState } from 'react';

import DestinationCard from '../../../../components/DestinationCard';
import { useResponsive } from '../../../../hooks/useResponsive';
import { DestinationType, mockDestinations } from './data';
type Props = {} & FlexProps;

const Section5 = ({ ...props }: Props) => {
  const [destination, setDestination] = useState<DestinationType | undefined>(
    mockDestinations.find((item) => item.title === 'Vietnam')
  );
  const { is2XLScreen, is3XLScreen } = useResponsive();
  return (
    <Flex mt='140px' direction='column' w='full' alignItems='center' {...props}>
      <Text fontWeight='semibold' fontSize='56px'>
        Top Destinations
      </Text>
      <Text fontWeight='medium' fontSize='md' color='#5B5F62'>
        Sost Brilliant reasons Entrada should be your one-stop-shop!
      </Text>
      <Flex mt='1.5rem'>
        {mockDestinations.map((item) => (
          <Button
            css={css`
              &:not(:first-child) {
                margin-left: 1rem;
              }
            `}
            _hover={{
              background: '#2D3134',
              color: '#FFFFFF',
            }}
            background={
              destination?.title === item.title ? '#2D3134' : 'transparent'
            }
            color={destination?.title === item.title ? '#FFFFFF' : '#2D3134'}
            p='10px 20px'
            borderRadius='2rem'
            h='auto'
            border='1px solid #2D3134'
            variant='unstyled'
            key={item.id}
            onClick={() => setDestination(item)}
          >
            <Text fontSize='14px' fontWeight='medium' lineHeight='14px'>
              {item.title}
            </Text>
          </Button>
        ))}
      </Flex>
      <Flex mt='50px' w='full'>
        {destination && destination.places.length >= 6 && (
          <Flex
            justifyContent='space-between'
            w='full'
            h={is3XLScreen ? '655px' : is2XLScreen ? '587px' : '526px'}
          >
            <Flex
              direction='column'
              justifyContent='space-between'
              w='22%'
              h='full'
            >
              <DestinationCard place={destination.places[0]} h='47%' />
              <DestinationCard place={destination.places[1]} h='47%' />
            </Flex>
            <Flex w='32%' h='full'>
              <DestinationCard place={destination.places[2]} />
            </Flex>
            <Flex
              h='full'
              w='42%'
              direction='column'
              justifyContent='space-between'
            >
              <DestinationCard place={destination.places[3]} h='47%' />
              <Flex justifyContent='space-between' h='50%' w='full'>
                <DestinationCard place={destination.places[4]} w='37%' />
                <DestinationCard place={destination.places[5]} w='57%' />
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Section5;
