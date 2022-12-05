import { Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <Flex
      css={css`
        margin-left: 1rem;
      `}
    >
      App
    </Flex>
  );
};

export default Home;
