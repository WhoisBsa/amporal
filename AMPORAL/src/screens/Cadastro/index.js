/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  LoginArea,
  Input,
  ActionButtonArea,
  ActionButtonText,
  Label,
  SigninArea,
  SigninButton,
  SigninText,
} from './styled';
import Lottie from 'lottie-react-native';
import {Platform} from 'react-native';
import {connect} from 'react-redux';

import mathTeatcher from '../../assets/mathTeacher.json';
import {DARK, LIGHT} from '../../styles/colors';

const Page = (props) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
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

      <SigninArea>
        <SigninText>Já possui uma conta? </SigninText>
        <SigninButton
          onPress={() => props.navigation.navigate('Login')}
          underlayColor="transparent">
          <SigninText subli="underline">Entrar</SigninText>
        </SigninButton>
      </SigninArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: 'Criar uma conta',
    headerShown: true,
    headerStyle: {
      backgroundColor: LIGHT,
      borderBottomRightRadius: 50,
    },
  };
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
