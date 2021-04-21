import React from 'react';
import { connect } from 'react-redux';
import { Box, Container, DataView, DataUserView, Input, Label } from './styled';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { LIGHT } from '../../styles/colors';

const Page = (props) => {
  return (
    <Container>
      <Box />

      <DataView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <DataUserView>
          {props.first_name ? (
            <>
              <Label>Nome do Aluno</Label>
              <Input>{props.first_name + ' ' + props.last_name}</Input>
            </>
          ) : null}

          {props.username ? (
            <>
              <Label>Nome de Usuário</Label>
              <Input>{props.username}</Input>
            </>
          ) : null}

          {props.email ? (
            <>
              <Label>Email</Label>
              <Input>{props.email}</Input>
            </>
          ) : null}

          {props.bio ? (
            <>
              <Label>Biografia do Aluno</Label>
              <Input>{props.bio}</Input>
            </>
          ) : null}

          {props.instituicao ? (
            <>
              <Label>Nome da Instituição</Label>
              <Input>{props.instituicao}</Input>
            </>
          ) : null}
        </DataUserView>
      </DataView>
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
  const ConfigBtnArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;

  const ConfigButton = () => {
    const btnAction = () => {
      navigation.navigate('Settings');
    };

    return (
      <ConfigBtnArea onPress={btnAction} underlayColor="transparent">
        <Icon name="settings-sharp" size={25} color={LIGHT} />
      </ConfigBtnArea>
    );
  };

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
    headerRight: () => <ConfigButton />,
    headerRightContainerStyle: {
      marginRight: 20,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
