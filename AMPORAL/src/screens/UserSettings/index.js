import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Box, Container, DataView, Input, Label} from './styled';

const Page = (props) => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');

  const [username, setUsername] = useState(props.username);
  const [first_name, setFirstName] = useState(props.first_name);
  const [last_name, setLastName] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [bio, setBio] = useState(props.bio);
  const [instituicao, setInstituicao] = useState(props.instituicao);
  const [data_nascimento, setDatanasc] = useState(props.data_nascimento);

  return (
    <Container>
      <Box />

      <DataView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Label>Nome do Aluno</Label>
        <Input
          placeholder="Digite seu nome completo"
          value={first_name + ' ' + last_name ? first_name && last_name : ''}
          onChangeText={(t) => {
            t = t.strip(' ');
            setFirstName(t[0].trim());
            setLastName(t[1].trim());
          }}
        />
        <Label>Nome de Usuário</Label>
        <Input
          placeholder="Digite seu nome de usuário"
          value={username}
          onChangeText={(t) => setUsername(t.trim())}
        />
        <Label>Email</Label>
        <Input
          placeholder="Digite seu endereço de email"
          value={email}
          onChangeText={(t) => setEmail(t.trim())}
        />
        <Label>Bio</Label>
        <Input
          placeholder="Digite sua leve biografia"
          value={bio}
          onChangeText={(t) => setBio(t.trim())}
        />
        <Label>Instituição</Label>
        <Input
          placeholder="Digite o nome de sua instituição"
          value={instituicao}
          onChangeText={(t) => setInstituicao(t.trim())}
        />
        <Label>Data de Nascimento</Label>
        <Input
          placeholder="Digite sua data de nascimento: xx/xx/xxxx"
          value={data_nascimento}
          onChangeText={(t) => setDatanasc(t.trim())}
        />
      </DataView>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
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
    username: state.userReducer.username,
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
    setUsername: (username) =>
      dispatch({type: 'SET_USERNAME', payload: {username}}),
    setFirstName: (first_name) =>
      dispatch({type: 'SET_FIRST_NAME', payload: {first_name}}),
    setLastName: (last_name) =>
      dispatch({type: 'SET_LAST_NAME', payload: {last_name}}),
    setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}}),
    setBio: (bio) => dispatch({type: 'SET_BIO', payload: {bio}}),
    setDatanasc: (data_nascimento) =>
      dispatch({type: 'SET_DATANASC', payload: {data_nascimento}}),
    signOut: () => dispatch({type: 'SIGNOUT_REQUEST'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
