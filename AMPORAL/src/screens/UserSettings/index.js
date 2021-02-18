import React from 'react';
import {Box, Container, DataView} from './styled';

const Page = (props) => {
  return (
    <Container>
      <Box />

      <DataView />
    </Container>
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
