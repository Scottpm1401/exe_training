import { Button, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React from 'react';
import SVG from 'react-inlinesvg';

type Props = {} & FlexProps;

const Footer = ({ ...props }: Props) => {
  return <Flex {...props}></Flex>;
};

export default Footer;
