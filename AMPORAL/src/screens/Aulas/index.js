import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTube from 'react-native-youtube';

import { Container, Header, StartButton, StartText } from './styled';
import { LIGHT } from '../../styles/colors';
import { API_KEY } from '@env';

const Page = (props) => {
  console.log(props);
  return (
    <Container>
      <Header>{props.aula_titulo}</Header>

      <YouTube
        apiKey={API_KEY}
        videoId={props.aula_link} // The YouTube video ID
        loop // control whether the video should loop when ended
        style={{ alignSelf: 'stretch', height: 300 }}
      />
    </Container>
  );
};

Page.navigationOptions = ({ navigation }) => {
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
    aula_id: state.aulaReducer.id,
    aula_link: state.aulaReducer.link,
    aula_material: state.aulaReducer.material,
    aula_titulo: state.aulaReducer.titulo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch({ type: 'SET_ID', payload: { id } }),
    setLink: (link) => dispatch({ type: 'SET_LINK', payload: { link } }),
    setMaterial: (material) => dispatch({ type: 'SET_MATERIAL', payload: { material } }),
    setTitulo: (titulo) => dispatch({ type: 'SET_TITULO', payload: { titulo } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
