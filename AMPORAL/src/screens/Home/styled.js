import styled from 'styled-components/native';
import {LIGHT, PRIMARY} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin: 2.5% 5%;
`;

export const StartButton = styled.TouchableHighlight`
  width: 60%;
  height: 50px;
  align-self: center;
  background-color: ${PRIMARY};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
`;

export const StartText = styled.Text`
  color: ${LIGHT};
  font-size: 24px;
  font-weight: bold;
`;
