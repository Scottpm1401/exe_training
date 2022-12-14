import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import React from 'react';

import Container from '../../layout/Container';
import NewSletter from './components/NewSletter';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

type Props = {};

const Home = (props: Props) => {
  return (
    <Container direction='column'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <NewSletter />
    </Container>
  );
};

export default Home;
