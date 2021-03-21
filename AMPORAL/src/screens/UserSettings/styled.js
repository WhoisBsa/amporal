import styled from 'styled-components/native';
import {DARK, LIGHT, PRIMARY, SECONDARY} from '../../styles/colors';

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
`;

export const DataUserView = styled.View`
  padding: 0px 20px 10px;
`;

export const Label = styled.Text`
  font-size: ${(props) => props.size || '16'}px;
  color: ${LIGHT};
  font-weight: bold;
  margin: 15px 0px 10px 0px;
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

export const ConfigButtonArea = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  justify-content: flex-end;
  align-self: flex-end;
  position: absolute;
  top: -43px;
  right: 7%;
  z-index: 1;
`;

export const SaveButton = styled.TouchableHighlight`
  background-color: ${SECONDARY};
  border-radius: 10px;
  height: 45px;
  width: 100%;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const SaveButtonText = styled.Text`
  font-size: 16px;
  color: ${DARK};
  font-weight: bold;
`;
