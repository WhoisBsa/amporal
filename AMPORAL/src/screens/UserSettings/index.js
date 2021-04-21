import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  DataView,
  DataUserView,
  Input,
  Label,
  ConfigButtonArea,
  SaveButton,
  SaveButtonText,
  ImageProfile,
} from './styled';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

import { LIGHT } from '../../styles/colors';
import Api from '../../Api';

const Page = (props) => {
  const [username, setUsername] = useState(props.username);
  const [first_name, setFirstName] = useState(props.first_name);
  const [last_name, setLastName] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [bio, setBio] = useState(props.bio);
  const [instituicao, setInstituicao] = useState(props.instituicao);
  const [data_nascimento, setDatanasc] = useState(props.data_nascimento);
  const [filePath, setFilePath] = useState({});

  console.log('Foto filepath: ' + filePath.uri);
  console.log('Foto props: ' + props.foto_url);
  const handleExitButton = () => {
    Alert.alert(
      'Sair do AMPORAL',
      'Deseja mesmo sair?',
      [
        {
          text: 'Sair',
          onPress: () => {
            props.signOut();
            props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
              }),
            );
          },
        },
        {
          text: 'Cancelar',
          onPress: () => { },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => { },
      },
    );
  };

  const saveData = () => {
    props.setUsername(username?.trim());
    props.setFirstName(first_name?.trim());
    props.setLastName(last_name?.trim());
    props.setEmail(email?.trim());
    props.setBio(bio?.trim());
    props.setInstituicao(instituicao?.trim());
    props.setDatanasc(data_nascimento?.trim());
  };

  const handleSaveButton = () => {
    Alert.alert(
      'Salvar Dados Alterados',
      'Deseja mesmo salvar as alterações?',
      [
        {
          text: 'Salvar',
          onPress: async () => {
            saveData();

            let json = await Api.updateUserData(
              props.token,
              username,
              first_name,
              last_name,
              bio,
              instituicao,
              data_nascimento,
            );
            const items = [
              ['username', json.username],
              ['email', json.email],
              ['first_name', json.first_name],
              ['last_name', json.last_name],
              ['bio', json.bio],
              ['instituicao', json.instituicao],
              ['data_nascimento', json.data_nascimento],
            ];
            await AsyncStorage.multiSet(items);
          },
        },
        {
          text: 'Cancelar',
          onPress: () => { },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => { },
      },
    );
  };

  const handleChangeProfilePic = () => {
    console.log('Url foto 1: ' + props.foto_url);
    Alert.alert(
      'Alterar Foto de perfil',
      'Deseja alterar sua foto de perfil?',
      [
        {
          text: 'Alterar',
          onPress: () => {
            let options = {
              title: 'Select Image',
              customButtons: [
                {
                  name: 'customOptionKey',
                  title: 'Choose Photo from Custom Option'
                },
              ],
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            };
            launchImageLibrary(options, (response) => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton
                );
                alert(response.customButton);
              } else {
                let source = response;
                setFilePath(source);

              }
            });
          },
        },
        {
          text: 'Cancelar',
          onPress: () => { },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => { },
      },
    );

    props.setFoto(filePath.uri);

    console.log('Url da foto: ' + props.foto_url);
  };

  return (
    <Container>
      <ConfigButtonArea onPress={handleExitButton} underlayColor="transparent">
        <Icon name="exit" size={25} color={LIGHT} />
      </ConfigButtonArea>
      <Box onPress={handleChangeProfilePic}>
        {!filePath.uri && (
          <ImageProfile source={{ uri: props.foto_url }} />
        ) || (
            <ImageProfile source={{ uri: filePath.uri }} />
          )}

      </Box>

      <DataView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <DataUserView>
          <Label>Nome</Label>
          <Input
            placeholder="Digite seu nome"
            value={first_name}
            onChangeText={(t) => setFirstName(t)}
          />
          <Label>Sobrenome</Label>
          <Input
            placeholder="Digite seu sobrenome"
            value={last_name}
            onChangeText={(t) => setLastName(t)}
          />
          <Label>Nome de usuário</Label>
          <Input value={username} editable={false} />
          <Label>Email</Label>
          <Input value={email} editable={false} />
          <Label>Bio</Label>
          <Input
            placeholder="Digite sua leve biografia"
            value={bio}
            onChangeText={(t) => setBio(t)}
          />
          <Label>Instituição</Label>
          <Input
            placeholder="Digite o nome de sua instituição"
            value={instituicao}
            onChangeText={(t) => setInstituicao(t)}
          />
          <Label>Data de Nascimento</Label>
          <Input
            placeholder="Digite sua data de nascimento: xx/xx/xxxx"
            value={data_nascimento}
            onChangeText={(t) => setDatanasc(t)}
          />

          <Label>Salvar Alterações:</Label>
          <SaveButton onPress={handleSaveButton} underlayColor="#34F674">
            <SaveButtonText>SALVAR</SaveButtonText>
          </SaveButton>
        </DataUserView>
      </DataView>
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  return {
    title: 'AMPORAL',
    headerShown: true,
    headerStyle: {
      backgroundColor: 'dodgerblue',
      borderBottomRightRadius: 50,
    },
    headerTitleStyle: {
      color: '#EEF8FF',
      fontWeight: 'bold',
    },
    headerRightContainerStyle: {
      marginRight: 20,
    },
    headerTintColor: '#EEF8FF',
    cardStyle: {
      backgroundColor: '#FFFFFF',
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    username: state.userReducer.username,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name,
    email: state.userReducer.email,
    bio: state.userReducer.bio,
    instituicao: state.userReducer.instituicao,
    data_nascimento: state.userReducer.data_nascimento,
    foto_url: state.userReducer.foto_url,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) =>
      dispatch({ type: 'SET_USERNAME', payload: { username } }),
    setFirstName: (first_name) =>
      dispatch({ type: 'SET_FNAME', payload: { first_name } }),
    setLastName: (last_name) =>
      dispatch({ type: 'SET_LNAME', payload: { last_name } }),
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: { email } }),
    setBio: (bio) => dispatch({ type: 'SET_BIO', payload: { bio } }),
    setInstituicao: (instituicao) =>
      dispatch({ type: 'SET_INSTITUICAO', payload: { instituicao } }),
    setDatanasc: (data_nascimento) =>
      dispatch({ type: 'SET_DATANASC', payload: { data_nascimento } }),
    setFoto: (foto_url) => dispatch({ type: 'SET_FOTO', payload: { foto_url } }),
    signOut: () => dispatch({ type: 'SIGNOUT_REQUEST' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
