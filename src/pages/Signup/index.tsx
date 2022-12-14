import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import SignupForm from './SignupForm';

type Props = {};

const Signup = (props: Props) => {
  return (
    <Flex
      marginY='5rem'
      minHeight='70vh'
      alignItems='center'
      justifyContent='center'
      direction='column'
    >
      <Flex direction='column' minW='340px'>
        <Flex mb='1rem' justifyContent='center'>
          <Text fontSize='3xl'>Create a new account</Text>
        </Flex>
        <SignupForm />
        <Flex
          mt='1rem'
          paddingY='1rem'
          borderRadius='0.5rem'
          justifyContent='center'
          background='white'
        >
          <Link color='blue' as={ReactLink} to='/login'>
            Already have an account?
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
