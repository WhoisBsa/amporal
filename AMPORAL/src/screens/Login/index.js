/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {Platform, Alert} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, NavigationActions} from 'react-navigation';

import Api from '../../Api';

import mathTeatcher from '../../assets/mathTeacher.json';

const Page = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    if (!username && !password) {
      Alert.alert('Campos vazios!', 'Por favor, preencha todos os campos!');
      return;
    }

    let json = await Api.signIn(username, password);

    if (json.token) {
      await AsyncStorage.setItem('token', json.token);
      let userData = await Api.getUserData(json.token);

      props.setToken(json.token);
      props.setUsername(username);
      props.setPass(password);
      props.setEmail(userData.email);
      props.setFirstName(userData.first_name);
      props.setLastName(userData.last_name);
      props.setBio(userData.bio);
      props.setInstituicao(userData.instituicao);
      props.setDatanasc(userData.data_nascimento);

      // Adicionar aulas

      props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'AppTab'})],
        }),
      );
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
          onChangeText={(e) => setUsername(e.trim())}
        />

        <Label>Senha</Label>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e.trim())}
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
    username: state.userReducer.username,
    password: state.userReducer.password,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name,
    email: state.userReducer.email,
    bio: state.userReducer.bio,
    instituicao: state.userReducer.instituicao,
    data_nascimento: state.userReducer.data_nascimento,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({type: 'SET_TOKEN', payload: {token}}),
    setUsername: (username) =>
      dispatch({type: 'SET_USERNAME', payload: {username}}),
    setPass: (password) => dispatch({type: 'SET_PASS', payload: {password}}),
    setFirstName: (first_name) =>
      dispatch({type: 'SET_FNAME', payload: {first_name}}),
    setLastName: (last_name) =>
      dispatch({type: 'SET_LNAME', payload: {last_name}}),
    setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}}),
    setBio: (bio) => dispatch({type: 'SET_BIO', payload: {bio}}),
    setInstituicao: (instituicao) =>
      dispatch({type: 'SET_INSTITUICAO', payload: {instituicao}}),
    setDatanasc: (data_nascimento) =>
      dispatch({type: 'SET_DATANASC', payload: {data_nascimento}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
