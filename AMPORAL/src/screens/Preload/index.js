import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Lottie from 'lottie-react-native';

import mathTeatcher from '../../assets/mathTeacher.json';

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
        actions: [NavigationActions.navigate({routeName: 'HomeStack'})],
      }),
    );
  }
  return (
    <Lottie
      style={{width: '80%'}}
      resizeMode="contain"
      source={mathTeatcher}
      autoPlay
      loop
    />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

export default connect(mapStateToProps)(Preload);
