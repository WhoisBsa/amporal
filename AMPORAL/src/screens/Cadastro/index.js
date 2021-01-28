/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  LoginArea,
  Input,
  ActionButtonArea,
  ActionButtonText,
  Label,
} from './styled';
import Lottie from 'lottie-react-native';
import {Platform} from 'react-native';

import mathTeatcher from '../../assets/mathTeacher.json';

const Page = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Label size="28">Bem-vindo(a) ao AMPORAL!</Label>
      <Lottie
        style={{width: '80%', marginBottom: -30}}
        resizeMode="contain"
        source={mathTeatcher}
        autoPlay
        loop={false}
      />

      <LoginArea>
        <Label>Email</Label>
        <Input placeholder="Email" keyboardType="email-address" />

        <Label>Senha</Label>
        <Input placeholder="Senha" secureTextEntry={true} />

        <ActionButtonArea underlayColor="#4FF8A0">
          <ActionButtonText>Cadastrar</ActionButtonText>
        </ActionButtonArea>
      </LoginArea>
    </Container>
  );
};

export default Page;
