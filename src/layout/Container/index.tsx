import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

import { useResponsive } from '../../hooks/useResponsive';

type Props = {} & FlexProps;

const Container = ({ children, ...props }: Props) => {
  const { isDesktop, isBigScreen } = useResponsive();
  return (
    <Flex
      w={isBigScreen ? '90vw' : isDesktop ? '95vw' : '90vw'}
      margin='0 auto'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Container;
