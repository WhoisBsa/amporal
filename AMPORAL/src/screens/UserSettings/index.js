import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LIGHT} from '../../styles/colors';

const Page = (props) => {
  return (
    <View>
      <Text>Testando Settings Screen</Text>
    </View>
  );
};

Page.navigationOptions = ({navigation}) => {
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
    headerRightContainerStyle: {
      marginRight: 20,
    },
    headerTintColor: '#EEF8FF',
    cardStyle: {
      backgroundColor: '#FFFFFF',
    },
  };
};

export default Page;
