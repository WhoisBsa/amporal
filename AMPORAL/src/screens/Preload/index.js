import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Lottie from 'lottie-react-native';

import mathTeatcher from '../../assets/mathTeacher.json';
import {Container, LoadingIcon} from './styled';

const Preload = (props) => {
  if (!props.token) {
    // LOGIN
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})],
      }),
    );
  } else {
    // HOME
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }
  return (
    <Container>
      <Lottie
        style={{width: '80%'}}
        resizeMode="contain"
        source={mathTeatcher}
        autoPlay
        loop
      />

      <LoadingIcon size="large" color="#34F692" />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Preload);
