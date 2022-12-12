import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { API } from '../../../api';
import axiosClient from '../../../interceptor';
import { validateEmail } from '../../../utils/common';

type Props = {};

const LoginSchema = Yup.object().shape({
  userinput: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = (props: Props) => {
  const handleLogin = async (values: {
    userinput: string;
    password: string;
  }) => {
    const { userinput, password } = values;
    const loginReq = validateEmail(values.userinput)
      ? {
          email: userinput,
          password,
        }
      : {
          username: userinput,
          password,
        };
    const res = await axiosClient.post(API.USER.LOGIN, loginReq);
    console.log(res.data);
  };

  return (
    <Flex w='full' h='full' alignItems='center' justifyContent='center'>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ userinput: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Flex direction='column'>
            <Text>Username or email address</Text>
            <Input
              value={values.userinput}
              onChange={handleChange('userinput')}
            />
            {errors.userinput && touched.userinput && (
              <Text>{errors.userinput}</Text>
            )}
            <Text>Password</Text>
            <Input
              type='password'
              value={values.password}
              onChange={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}
            <Button onClick={() => handleSubmit()}>Login</Button>
          </Flex>
        )}
      </Formik>
    </Flex>
  );
};

export default LoginForm;
