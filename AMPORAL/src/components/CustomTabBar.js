/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LIGHT, PRIMARY} from '../styles/colors';

const TabArea = styled.SafeAreaView`
  flex-direction: row;
  background-color: ${PRIMARY};
`;

const TabBarItem = styled.View`
  flex: 1;
  height: 65px;
  align-items: center;
`;

const TabRegular = styled.TouchableHighlight`
  align-items: center;
  width: 100%;
`;

const TabBall = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  background-color: #0070e0;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
  margin-top: -50px;
`;

const Text = styled.Text`
  color: ${LIGHT};
`;

export default (props) => {
  return (
    <TabArea>
      {props.items.map((item) => (
        <TabBarItem key={item.route}>
          {item.type === 'regular' && (
            <TabRegular
              underlayColor="transparent"
              onPress={() => props.navigation.navigate(item.route)}>
              <>
                {item.text === 'Início' && (
                  <Icon
                    name="home"
                    size={25}
                    color={LIGHT}
                    style={{marginTop: 10, marginBottom: 5}}
                  />
                )}
                {item.text === 'Perfil' && (
                  <Icon
                    name="person"
                    size={25}
                    color={LIGHT}
                    style={{marginTop: 10, marginBottom: 5}}
                  />
                )}
                <Text>{item.text}</Text>
              </>
            </TabRegular>
          )}

          {item.type === 'big' && (
            <TabBall
              underlayColor="#0A85FF"
              onPress={() => props.navigation.navigate(item.route)}>
              <>
                <Icon
                  name="play"
                  size={40}
                  color={LIGHT}
                  style={{alignSelf: 'center'}}
                />
              </>
            </TabBall>
          )}
        </TabBarItem>
      ))}
    </TabArea>
  );
};
