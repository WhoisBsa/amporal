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

  if (isLoaded) {

    const handleSubmitQuestions = () => {
      if (respostas.length < 3) {
        let count = 0;
        count = alt1 === undefined ? count += 1 : count;
        count = alt2 === undefined ? count += 1 : count;
        count = alt3 === undefined ? count += 1 : count;

        console.log(count, alt1);
        // let count = alt4 === undefined ? count++ : count;
        Alert.alert(
          'Questões sem responder.',
          count > 1 ?
          `Há ${count} questões não respondidas. Por favor responda todas as questões` 
          : 
          `Há ${count} questão não respondida. Por favor responda todas as questões`
        )
      } else {
        setRespostas([alt1, alt2, alt3])
      }
    }

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
