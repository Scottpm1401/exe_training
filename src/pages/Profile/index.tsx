import { Flex } from '@chakra-ui/layout';
import React from 'react';

import ProfileForm from './ProfileForm';

type Props = {};

const Profile = (props: Props) => {
  return (
    <Flex
      w='full'
      h='full'
      minH='70vh'
      alignItems='center'
      justifyContent='center'
      marginY='5rem'
    >
      <ProfileForm />
    </Flex>
  );
};

export default Profile;
