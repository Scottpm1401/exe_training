import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import * as Yup from 'yup';

import { LoginRequest } from '../../../models/api/user';
import { useAppDispatch } from '../../../redux/hooks';
import { actions } from '../../../redux/reducers';
import { login } from '../../../services/auth';
import { getProfile } from '../../../services/user';
import { validateEmail } from '../../../utils/common';

type LoginFormType = {
  userinput: string;
  password: string;
};

const initValue: LoginFormType = { userinput: '', password: '' };

const LoginSchema = Yup.object().shape({
  userinput: Yup.string().required('Please enter username or email'),
  password: Yup.string().required('Please enter password'),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const handleLogin = async (values: LoginFormType) => {
    const { userinput, password } = values;
    const loginReq: LoginRequest = validateEmail(values.userinput)
      ? {
          email: userinput,
          password,
        }
      : {
          username: userinput,
          password,
        };
    const data = await login(loginReq);
    dispatch(actions.auth.setAuth(data));
    const userProfile = await getProfile();
    dispatch(actions.user.setUser(userProfile));
  };

  return (
    <Flex
      w='full'
      borderRadius='0.5rem'
      background='white'
      p='1.5rem 1rem'
      alignItems='center'
      justifyContent='center'
    >
      <Formik
        validationSchema={LoginSchema}
        initialValues={initValue}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Flex direction='column' w='full'>
            <Text>Username or email address</Text>
            <Input
              mt='0.5rem'
              value={values.userinput}
              onChange={handleChange('userinput')}
            />
            {errors.userinput && touched.userinput && (
              <Text fontSize='smaller' color='red'>
                {errors.userinput}
              </Text>
            )}
            <Flex
              mt='0.5rem'
              justifyContent='space-between'
              alignItems='center'
            >
              <Text>Password</Text>
              <Link color='blue' fontSize='smaller' as={ReactLink} to='#'>
                Forgot password?
              </Link>
            </Flex>
            <Input
              mt='0.5rem'
              type='password'
              value={values.password}
              onChange={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text fontSize='smaller' color='red'>
                {errors.password}
              </Text>
            )}
            <Button
              colorScheme='orange'
              mt='1rem'
              onClick={() => handleSubmit()}
            >
              Sign in
            </Button>
          </Flex>
        )}
      </Formik>
    </Flex>
  );
};

export default LoginForm;
