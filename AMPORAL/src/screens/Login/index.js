/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  LoginArea,
  Input,
  ActionButtonArea,
  ActionButtonText,
  Label,
  ForgotPasswordButton,
  ForgotPasswordText,
  SigninArea,
  SigninButton,
  SigninText,
} from './styled';
import Lottie from 'lottie-react-native';
import {Platform} from 'react-native';
import {connect} from 'react-redux';

import mathTeatcher from '../../assets/mathTeacher.json';

const Page = (props) => {
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
        <Label>Usuário</Label>
        <Input placeholder="Digite seu nome de usuário" />

        <Label>Senha</Label>
        <Input placeholder="Digite sua senha" secureTextEntry={true} />
        <ForgotPasswordButton>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordButton>

        <ActionButtonArea underlayColor="#4FF8A0">
          <ActionButtonText>Entar</ActionButtonText>
        </ActionButtonArea>
      </LoginArea>

      <SigninArea>
        <SigninText>Não possui uma conta? </SigninText>
        <SigninButton
          onPress={() => props.navigation.navigate('Cadastro')}
          underlayColor="transparent">
          <SigninText subli="underline">Cadastre-se!</SigninText>
        </SigninButton>
      </SigninArea>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
