import styled from 'styled-components/native';
import { DARK, LIGHT, PRIMARY, SECONDARY } from '../../styles/colors';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const LoginArea = styled.View`
  width: 80%;
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

export const ActionButtonArea = styled.TouchableHighlight`
  background-color: ${SECONDARY};
  border-radius: 10px;
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  color: ${DARK};
  font-weight: bold;
`;

export const SigninArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
`;

export const SigninText = styled.Text`
  color: ${DARK};
  font-size: 18px;
  font-weight: bold;
  text-decoration-line: ${(props) => props.subli || 'none'};
`;

export const SigninButton = styled.TouchableHighlight``;
