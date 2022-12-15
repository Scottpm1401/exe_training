import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import moment from 'moment';
import React from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import CustomDatePicker from '../../../components/CustomeDatePicker';
import { useAppDispatch } from '../../../redux/hooks';
import { actions } from '../../../redux/reducer';
import { signup } from '../../../services/auth';
import { getProfile } from '../../../services/user';

type SignupFormType = {
  displayName: string;
  username: string;
  email: string;
  password: string;
  birthday: Date | null;
};

const initValue: SignupFormType = {
  displayName: '',
  username: '',
  email: '',
  password: '',
  birthday: null,
};

const SignupSchema = Yup.object().shape({
  displayName: Yup.string().required('Please enter your name'),
  username: Yup.string().required('Please enter username'),
  email: Yup.string().email().required('Please enter email'),
  password: Yup.string().required('Please enter password'),
  birthday: Yup.string().required('Please choose your birthday'),
});

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignup = async (values: SignupFormType) => {
    const data = await signup({
      ...values,
      birthday: moment(values.birthday).format(),
    });
    dispatch(actions.auth.setAuth(data));
    const userProfile = await getProfile();
    dispatch(actions.user.setUser(userProfile));
    navigate('/');
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
        validationSchema={SignupSchema}
        initialValues={initValue}
        onSubmit={handleSignup}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <Flex direction='column' w='full'>
            <Flex direction='column'>
              <Text>Name</Text>
              <Input
                mt='0.5rem'
                value={values.displayName}
                onChange={handleChange('displayName')}
              />
              {errors.displayName && touched.displayName && (
                <Text fontSize='smaller' color='red'>
                  {errors.displayName}
                </Text>
              )}
            </Flex>

            <Flex direction='column' mt='0.5rem'>
              <Text>Username</Text>
              <Input
                mt='0.5rem'
                value={values.username}
                onChange={handleChange('username')}
              />
              {errors.username && touched.username && (
                <Text fontSize='smaller' color='red'>
                  {errors.username}
                </Text>
              )}
            </Flex>

            <Flex direction='column' mt='0.5rem'>
              <Text>Email</Text>
              <Input
                mt='0.5rem'
                type='email'
                value={values.email}
                onChange={handleChange('email')}
              />
              {errors.email && touched.email && (
                <Text fontSize='smaller' color='red'>
                  {errors.email}
                </Text>
              )}
            </Flex>

            <Flex direction='column' mt='0.5rem'>
              <Text>Birthday</Text>

              <CustomDatePicker
                mt='0.5rem'
                currentDate={values.birthday}
                callback={(date) => setFieldValue('birthday', date)}
              />
            </Flex>

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
              Create account
            </Button>
          </Flex>
        )}
      </Formik>
    </Flex>
  );
};

export default SignupForm;
