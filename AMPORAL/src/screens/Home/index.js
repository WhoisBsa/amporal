/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';

import laptopWorking from '../../assets/laptop-working.json';
import {Container, Header, StartButton, StartText} from './styled';
import {LIGHT} from '../../styles/colors';

const Page = (props) => {
  return (
    <Container>
      <Header>NUNCA FOI TÃO FÁCIL APRENDER MATEMÁTICA</Header>

      <StartButton
        underlayColor="#0070e0"
        onPress={() => props.navigation.navigate('Aulas')}>
        <StartText>COMECE JÁ!</StartText>
      </StartButton>

      <Header>
        Começe a aprender com as melhores videoaulas disponíveis!!!
      </Header>

      <Lottie
        style={{width: '80%', alignSelf: 'center'}}
        resizeMode="contain"
        source={laptopWorking}
        autoPlay
        loop
      />
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch({type: 'SIGNOUT_REQUEST'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
