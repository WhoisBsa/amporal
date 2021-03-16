import styled from 'styled-components/native';
import {DARK, LIGHT, PRIMARY} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Box = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${DARK};
  margin: 40px 0;
  border-radius: 20px;
`;

export const DataView = styled.ScrollView`
  width: 100%;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background-color: ${PRIMARY};
  flex: 1;
  padding: 20px;
  padding-top: -10px;
`;

export const Label = styled.Text`
  font-size: ${(props) => props.size || '16'}px;
  color: ${LIGHT};
  font-weight: bold;
  margin: 20px 0px 10px 0px;
`;

export const Input = styled.TextInput`
  background-color: ${LIGHT};
  border-radius: 10px;
  height: 45px;
  width: 100%;
  font-size: 16px;
  color: ${DARK};
  font-weight: bold;
  padding-left: 10px;
`;
