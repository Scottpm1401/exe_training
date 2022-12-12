import { Flex } from '@chakra-ui/react';
import React from 'react';

import LoginForm from './LoginForm';

type Props = {};

const Login = (props: Props) => {
  return (
    <Flex>
      <LoginForm />
    </Flex>
  );
};

export default Login;
