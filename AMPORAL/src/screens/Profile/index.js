import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LIGHT} from '../../styles/colors';

const Page = (props) => {
  return (
    <View>
      <Text>Testando Profile Screen</Text>
    </View>
  );
};

Page.navigationOptions = ({navigation}) => {
  const ConfigButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;

  const ConfigButton = () => {
    const btnAction = () => {
      navigation.navigate('HomeConfig');
    };

    return (
      <ConfigButtonArea onPress={btnAction} underlayColor="transparent">
        <Icon name="settings-sharp" size={25} color={LIGHT} />
      </ConfigButtonArea>
    );
  };

  return {
    title: 'PERFIL',
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

export default Page;
