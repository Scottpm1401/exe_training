import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

import { useResponsive } from '../../hooks/useResponsive';

type Props = {} & FlexProps;

const Container = ({ children, ...props }: Props) => {
  const { isBigScreen } = useResponsive();
  return (
    <Flex maxW={isBigScreen ? '95vw' : '90vw'} margin='0 auto' {...props}>
      {children}
    </Flex>
  );
};

export default Container;
