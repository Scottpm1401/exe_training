import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Input,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import moment from 'moment';
import React, { useMemo } from 'react';
import * as Yup from 'yup';

import CustomDatePicker from '../../../components/CustomeDatePicker';
import { country } from '../../../const/country';
import { Gender, UserInfoType } from '../../../models/user';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { actions, selectors } from '../../../redux/reducer';
import { updateUser } from '../../../services/user';

type ProfileFormType = {
  displayName?: string;
  username: string;
  birthday: Date | null;
  info?: UserInfoType;
};

const ProfileSchema = Yup.object().shape({
  displayName: Yup.string().required('Please enter your name'),
  username: Yup.string().required('Please enter username'),
  birthday: Yup.string().required('Please choose your birthday'),
});

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const user = useAppSelector(selectors.user.selectUser);
  const handleUpdate = async (values: ProfileFormType) => {
    const data = await updateUser({
      ...values,
      birthday: moment(values.birthday).format(),
    });
    if (data) {
      dispatch(actions.user.setUser(data));
      toast({
        title: 'Update Profile Success',
        status: 'success',
        isClosable: true,
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const initValue: ProfileFormType = useMemo(
    () => ({
      displayName: user.displayName,
      username: user.username,
      birthday: user.birthday ? moment(user.birthday).toDate() : null,
      info: user.info,
    }),
    [user]
  );

  return (
    <Flex
      w='full'
      borderRadius='0.5rem'
      background='white'
      p='1.5rem 1rem'
      alignItems='center'
      justifyContent='center'
      maxW='600px'
    >
      <Formik
        validationSchema={ProfileSchema}
        initialValues={initValue}
        onSubmit={handleUpdate}
        enableReinitialize
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
              <Text>Birthday</Text>

              <CustomDatePicker
                mt='0.5rem'
                currentDate={values.birthday}
                callback={(date) => setFieldValue('birthday', date)}
              />
            </Flex>

            <Accordion allowToggle mt='1rem'>
              <AccordionItem border='none'>
                <AccordionButton
                  borderBottomWidth='1px'
                  borderRadius='md'
                  display='flex'
                  justifyContent='space-between'
                >
                  <Text>Additional Information</Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0'>
                  <Flex direction='column'>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>First Name</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.first_name}
                        onChange={handleChange('info.first_name')}
                      />
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>Last Name</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.last_name}
                        onChange={handleChange('info.last_name')}
                      />
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>Phone number</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.phone}
                        onChange={handleChange('info.phone')}
                      />
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>Gender</Text>
                      <Select
                        mt='0.5rem'
                        value={values.info?.sex || Gender.other}
                        onChange={handleChange('info.sex')}
                      >
                        <option value={Gender.male}>Male</option>
                        <option value={Gender.female}>Female</option>
                        <option value={Gender.other}>Other</option>
                      </Select>
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>Country</Text>
                      <Select
                        mt='0.5rem'
                        value={values.info?.address.country || 'US'}
                        onChange={handleChange('info.address.country')}
                      >
                        {country.map((item, index) => (
                          <option value={item.code} key={item.code}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>City</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.address.city}
                        onChange={handleChange('info.address.city')}
                      />
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>State</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.address.state}
                        onChange={handleChange('info.address.state')}
                      />
                    </Flex>
                    <Flex direction='column' mt='0.5rem'>
                      <Text>Line</Text>
                      <Input
                        mt='0.5rem'
                        value={values.info?.address.line1}
                        onChange={handleChange('info.address.line1')}
                      />
                    </Flex>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Button
              colorScheme='orange'
              mt='1rem'
              onClick={() => handleSubmit()}
            >
              Update Profile
            </Button>
          </Flex>
        )}
      </Formik>
    </Flex>
  );
};

export default ProfileForm;
