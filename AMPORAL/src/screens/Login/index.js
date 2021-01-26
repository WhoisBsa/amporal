/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container} from './styled';
import Lottie from 'lottie-react-native';
import {Platform} from 'react-native';

import mathTeatcher from '../../assets/mathTeacher.json';

const Page = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Lottie
        style={{width: '80%'}}
        resizeMode="contain"
        source={mathTeatcher}
        autoPlay
        loop
      />
    </Container>
  );
};

export default Page;
