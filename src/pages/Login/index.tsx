import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import LoginForm from './LoginForm';

type Props = {};

const Login = (props: Props) => {
  return (
    <Flex
      minHeight='70vh'
      alignItems='center'
      justifyContent='center'
      direction='column'
    >
      <Flex direction='column' minW='340px'>
        <Flex mb='1rem' justifyContent='center'>
          <Text fontSize='3xl'>Sign in to Salty</Text>
        </Flex>
        <LoginForm />
        <Flex
          mt='1rem'
          paddingY='1rem'
          borderRadius='0.5rem'
          justifyContent='center'
          background='white'
        >
          <Text mr='0.25rem'>New to Salty?</Text>
          <Link color='blue' as={ReactLink} to='/signup'>
            Create an account
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
