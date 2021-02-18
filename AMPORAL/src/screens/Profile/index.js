import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import {LIGHT} from '../../styles/colors';
import {Box, Container, DataView} from './styled';

const Page = (props) => {
  return (
    <Container>
      <Box />

      <DataView />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const ConfigButtonArea = styled.TouchableHighlight`
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
      <ConfigButtonArea onPress={btnAction} underlayColor="transparent">
        <Icon name="settings-sharp" size={25} color={LIGHT} />
      </ConfigButtonArea>
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
    token: state.userReducer.token,
    name: state.userReducer.name,
    password: state.userReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({type: 'SET_TOKEN', payload: {token}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
