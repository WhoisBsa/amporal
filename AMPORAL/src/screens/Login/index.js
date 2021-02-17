/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import Api from '../../Api';

import mathTeatcher from '../../assets/mathTeacher.json';

const Page = (props) => {
  const [username, setUsername] = useState('matheus');
  const [password, setPassword] = useState('SNDhiupS36jTqpT');

  const handleLoginClick = async () => {
    if (!username && !password) {
      Alert.alert('Campos vazios!', 'Por favor, preencha todos os campos!');
      return;
    }

    let json = await Api.signIn(username, password);

    if (json.token) {
      await AsyncStorage.setItem('token', json.token);

      props.setToken(json.token);
      props.setName(username);
      props.setPass(password);
      props.navigation.navigate('AppTab');
    } else {
      Alert.alert('Erro de Login', 'Nome de usuário ou senha inválidos!');
    }
  };

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
        <Input
          placeholder="Digite seu nome de usuário"
          value={username}
          onChangeText={(e) => setUsername(e)}
        />

        <Label>Senha</Label>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <ForgotPasswordButton>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordButton>

        <ActionButtonArea
          underlayColor="#4FF8A0"
          onPress={() => handleLoginClick()}>
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
  return {
    token: state.userReducer.token,
    name: state.userReducer.name,
    password: state.userReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({type: 'SET_TOKEN', payload: {token}}),
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
    setPass: (password) => dispatch({type: 'SET_PASS', payload: {password}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
