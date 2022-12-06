import { Flex } from '@chakra-ui/react';
import React from 'react';

import Container from '../../components/Container';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

type Props = {};

const Home = (props: Props) => {
  return (
    <Container direction='column'>
      <Section1 />
      <Section2 />
    </Container>
  );
};

export default Home;
