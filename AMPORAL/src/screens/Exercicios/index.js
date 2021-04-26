/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RadioButton } from 'react-native-paper';

import { Container, LoadingIcon, Header, ExerciciosList, AltText, SaveButtonArea, SaveButtonText } from './styled';
import Api from '../../Api';

const Page = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [exercicios, setExercicios] = useState({});
  const [respostas, setRespostas] = useState([]);

  useEffect(() => {
    const getExercicios = async () => {
      let json = await Api.getExercicios(props.token);
      setExercicios(json);
      setIsLoaded(true);
    }
    getExercicios();
  }, []);

  console.log('====================================');
  console.log(respostas);
  console.log('====================================');

  const ListItems = ({ item }) => {
    return (
      <>
        <Header>{item.questao}</Header>
        <RadioButton.Group 
          onValueChange={newValue => setRespostas(...respostas, newValue)} respostas={respostas}>
            <>
            <AltText>{item.alt1}</AltText>
            <RadioButton respostas="a" />
            </>
            <>
            <AltText>{item.alt2}</AltText>
            <RadioButton respostas="b" />
            </>
            <>
            <AltText>{item.alt3}</AltText>
            <RadioButton respostas="c" />
            </>
            <>
            <AltText>{item.alt4}</AltText>
            <RadioButton respostas="d" />
            </>
        </RadioButton.Group>
      </>
    )
  }

  const getActionSaveButton = () => {
    return (
      <SaveButtonArea>
        <SaveButtonText>ENVIAR RESPOSTAS</SaveButtonText>
      </SaveButtonArea>
    )
  }

  if (isLoaded) {
    return (
      <Container>
        <ExerciciosList
          data={exercicios}
          renderItem={({ item }) => <ListItems item={item} />}
          keyExtractor={(item, index) => item.id.toString()}
          ListFooterComponent={getActionSaveButton}
        />

      </Container>
    );
  } else {
    return (
      <Container>
        <Header>Carregando Exercicios...</Header>
        <LoadingIcon size="large" color="#34F692" />
      </Container>
    )
  }
};

Page.navigationOptions = ({ navigation }) => {
  return {
    title: 'EXERCÍCIOS',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#EEF8FF',
      borderBottomRightRadius: 50,
    },
    headerTitleStyle: {
      color: '#011627',
      fontWeight: 'bold',
    },
    headerRightContainerStyle: {
      marginRight: 20,
    },
    headerLeft: () => null,
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    aulaId: state.aulaReducer.id,
    aula_titulo: state.aulaReducer.titulo,
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
