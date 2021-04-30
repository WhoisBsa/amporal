import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTube from 'react-native-youtube';
import { withNavigationFocus } from 'react-navigation'

import {
  Container,
  Header,
  ActionButtonArea,
  ActionButtonText,
  ButtonArea,
  CommentsArea,
  CommentList,
  CommentText,
} from './styled';
import { LIGHT, RED } from '../../styles/colors';
import { API_KEY } from '@env';
import Api from '../../Api';
import { Alert } from 'react-native';

const YTPlayer = (props) => {
  const [height, setHeight] = useState(250);

  const handleReady = () => {
    setTimeout(() => setHeight(251), 1);
  }

  return (
    <YouTube
      controls={1}
      apiKey={API_KEY}
      videoId={props.videoId}
      resumePlayAndroid={false}
      style={{
        alignSelf: 'stretch',
        width: "100%",
        height: height
      }}
      onReady={handleReady}
    />
  );
}

const Page = (props) => {
  const commentData = props.comentarios[0].comentarios;

  const handlePreviousVideo = async () => {
    if (props.aula_id === 1) {
      Alert.alert(
        'Não há aulas anteriores.',
        'Essa é a sua primeira aula. Veja os videos e faça os exercícios para aumentar seu progresso.',
        [
          {
            text: 'OK',
            onPress: () => { },
          }
        ],
        {
          cancelable: true,
        }
      )
    } else {
      await Api.previousClass(props.token);

      let json = await Api.getClass(props.token);

      props.setId(json.id);
      props.setLink(json.link);
      props.setMaterial(json.material);
      props.setTitulo(json.titulo);
      props.navigation.navigate('Aulas');
    }           
  }

  const getVideoScreen = () => {
    return (
      <>
        <ButtonArea>
          <ActionButtonArea
            onPress={handlePreviousVideo}
            underlayColor={RED}
          >
            <ActionButtonText>
              <Icon
                name="arrow-back-circle-outline"
                size={40}
                color={LIGHT}
              />
            </ActionButtonText>
          </ActionButtonArea>

          <ActionButtonArea
            color={1}
            onPress={() => props.navigation.navigate('Exercicios')}
            underlayColor="dodgerblue">
            <ActionButtonText>
              <Icon
                name="arrow-forward-circle-outline"
                size={40}
                color={LIGHT}
              />
            </ActionButtonText>
          </ActionButtonArea>
        </ButtonArea>

        <Header>Comentários da Aula:</Header>
      </>
    );
  };

  const ListItems = ({ item }) => {
    return (
      <CommentsArea>
        <Icon name="person-circle" size={40} />
        <CommentText>{item.comentario} </CommentText>
      </CommentsArea>
    );
  }

  return (props.isFocused && (
    <Container>
      <Header>
        Aula {props.aula_id} - {props.aula_titulo}
      </Header>

      <YTPlayer videoId={props.aula_link} />

      <CommentList
        data={commentData}
        renderItem={({ item }) => <ListItems item={item} />}
        keyExtractor={(item, index) => item.id.toString()}
        ListHeaderComponent={getVideoScreen}
      />
    </Container>
  ))
}

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
      color: LIGHT,
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
    aula_id: state.aulaReducer.id,
    aula_link: state.aulaReducer.link,
    aula_material: state.aulaReducer.material,
    aula_titulo: state.aulaReducer.titulo,
    comentarios: state.comentariosReducer.comentarios,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch({ type: 'SET_ID', payload: { id } }),
    setLink: (link) => dispatch({ type: 'SET_LINK', payload: { link } }),
    setMaterial: (material) =>
      dispatch({ type: 'SET_MATERIAL', payload: { material } }),
    setTitulo: (titulo) => dispatch({ type: 'SET_TITULO', payload: { titulo } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Page));