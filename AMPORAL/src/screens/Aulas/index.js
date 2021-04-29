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
import { LIGHT } from '../../styles/colors';
import { API_KEY } from '@env';

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

  const getVideoScreen = () => {
    return (
      <>
        <ButtonArea>
          <ActionButtonArea>
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
    aula_id: state.aulaReducer.id,
    aula_link: state.aulaReducer.link,
    aula_material: state.aulaReducer.material,
    aula_titulo: state.aulaReducer.titulo,
    comentarios: state.comentariosReducer.comentarios,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Page));