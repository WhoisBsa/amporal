/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';

import { Container, LoadingIcon, Header, QuestionView, AltText, SaveButtonArea, SaveButtonText } from './styled';
import Api from '../../Api';

const Page = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [exercicios, setExercicios] = useState({});
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  // const [alt4, setAlt4] = useState(props.respostas[3]);

  useEffect(() => {
    const getExercicios = async () => {
      let json = await Api.getExercicios(props.token);
      setExercicios(json);
      setIsLoaded(true);
    }
    getExercicios();
  }, []);

  if (isLoaded) {

    const handleSubmitQuestions = async () => {
      setRespostas([alt1, alt2, alt3])
      let count = 0;

      count = alt1 === undefined ? count += 1 : count;
      count = alt2 === undefined ? count += 1 : count;
      count = alt3 === undefined ? count += 1 : count;
      // let count = alt4 === undefined ? count++ : count;
      if (count !== 0) {
        Alert.alert(
          'Questões sem responder.',
          count > 1 ?
            `Há ${count} questões não respondidas. Por favor responda todas as questões`
            :
            `Há ${count} questão não respondida. Por favor responda todas as questões`
        );
      } else {
        let json = await Api.sendAnswers(props.token, [alt1, alt2, alt3]);

        setResultado(json)

        if (json.message === 'aprovado') {
          Alert.alert(
            'Parabéns você foi aprovado! 🤩',
            'Você está pronto para ir para a próxima aula.',
            [
              {
                text: 'Pŕoxima aula',
                onPress: async () => {
                  await Api.nextClass(props.token);

                  let json = await Api.getClass(props.token);

                  props.setId(json.id);
                  props.setLink(json.link);
                  props.setMaterial(json.material);
                  props.setTitulo(json.titulo);
                  props.navigation.navigate('Aulas');
                },
              },
            ],
            {
              cancelable: false,
              onDismiss: () => { },
            });
        }
        else {
          Alert.alert(
            'Você não atingiu os 60% 😞',
            'Infelizmente você terá que refazer os exercícios.\n\n💡 Dica: reveja a aula caso for nescessário.',
            [
              {
                text: 'Refazer Teste',
                onPress: () => {
                  setAlt1(undefined);
                  setAlt2(undefined);
                  setAlt3(undefined);
                },
              },
              {
                text: 'Rever Aula',
                onPress: () => {
                  props.navigation.navigate('Aulas');
                }
              },
            ],
            {
              cancelable: false,
              onDismiss: () => { },
            });
        }
      }
    }

    const proximaAula = async () => {
      await Api.nextClass(props.token);

      let json = await Api.getClass(props.token);

      props.setId(json.id);
      props.setLink(json.link);
      props.setMaterial(json.material);
      props.setTitulo(json.titulo);
    }

    return (
      <Container>
        <Header>{exercicios[0].questao}</Header>
        <RadioButton.Group
          value={alt1}
          onValueChange={newValue => setAlt1(newValue)}>
          <QuestionView>
            <RadioButton value="a" />
            <AltText>{exercicios[0].alt1}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="b" />
            <AltText>{exercicios[0].alt2}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="c" />
            <AltText>{exercicios[0].alt3}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="d" />
            <AltText>{exercicios[0].alt4}</AltText>
          </QuestionView>
        </RadioButton.Group>

        <Header>{exercicios[1].questao}</Header>
        <RadioButton.Group
          value={alt2}
          onValueChange={newValue => setAlt2(newValue)} value={alt2}>
          <QuestionView>
            <RadioButton value="a" />
            <AltText>{exercicios[1].alt1}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="b" />
            <AltText>{exercicios[1].alt2}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="c" />
            <AltText>{exercicios[1].alt3}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="d" />
            <AltText>{exercicios[1].alt4}</AltText>
          </QuestionView>
        </RadioButton.Group>

        <Header>{exercicios[2].questao}</Header>
        <RadioButton.Group
          value={alt3}
          onValueChange={newValue => setAlt3(newValue)} value={alt3}>
          <QuestionView>
            <RadioButton value="a" />
            <AltText>{exercicios[2].alt1}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="b" />
            <AltText>{exercicios[2].alt2}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="c" />
            <AltText>{exercicios[2].alt3}</AltText>
          </QuestionView>
          <QuestionView>
            <RadioButton value="d" />
            <AltText>{exercicios[2].alt4}</AltText>
          </QuestionView>
        </RadioButton.Group>

        {/* <RadioButton.Group
        value={alt4}
        onValueChange={newValue => setAlt4(newValue)} value={alt4}>
        <QuestionView>
          <RadioButton value="a" />
          <AltText>{exercicios[3].alt1}</AltText>
        </QuestionView>
        <QuestionView>
          <RadioButton value="b" />
          <AltText>{exercicios[3].alt2}</AltText>
        </QuestionView>
        <QuestionView>
          <RadioButton value="c" />
          <AltText>{exercicios[3].alt3}</AltText>
        </QuestionView>
        <QuestionView>
          <RadioButton value="d" />
          <AltText>{exercicios[3].alt4}</AltText>
        </QuestionView>
      </RadioButton.Group> */}

        <SaveButtonArea onPress={handleSubmitQuestions}>
          <SaveButtonText>ENVIAR RESPOSTAS</SaveButtonText>
        </SaveButtonArea>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header>Carregando Exercícios...</Header>
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
