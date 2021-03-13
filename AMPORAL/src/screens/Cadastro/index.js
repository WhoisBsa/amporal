/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {Platform, Alert} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, NavigationActions} from 'react-navigation';

import Api from '../../Api';

import mathTeatcher from '../../assets/mathTeacher.json';
import {LIGHT} from '../../styles/colors';

const Page = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = async () => {
    if (!username && !email && !password) {
      Alert.alert('Campos vazios!', 'Por favor, preencha todos os campos!');
      return;
    }

    let json = await Api.signUp(username, email, password);

    if (typeof (json.username || json.email) === 'object') {
      Alert.alert(
        'Erro ao Cadastrar',
        'Nome de usuário ou email já existem. Por favor, tente novamente!',
      );
    } else {
      let getToken = await Api.signIn(username, password);

      if (getToken.token) {
        const items = [
          ['token', getToken.token],
          ['username', username],
          ['email', email],
          ['password', password],
        ];
        await AsyncStorage.multiSet(items);

        props.setToken(getToken.token);
        props.setUsername(username);
        props.setEmail(email);
        props.setPass(password);

        props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'AppTab'})],
          }),
        );
      }
    }
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Lottie
        style={{width: '60%', marginBottom: -30, marginTop: -30}}
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

        <Label>Email</Label>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setEmail(e.trim())}
        />

        <Label>Senha</Label>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e.trim())}
        />

        <ActionButtonArea
          underlayColor="#4FF8A0"
          onPress={() => handleSignUpClick()}>
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
  return {
    token: state.userReducer.token,
    username: state.userReducer.username,
    email: state.userReducer.email,
    password: state.userReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({type: 'SET_TOKEN', payload: {token}}),
    setUsername: (username) =>
      dispatch({type: 'SET_USERNAME', payload: {username}}),
    setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}}),
    setPass: (password) => dispatch({type: 'SET_PASS', payload: {password}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
