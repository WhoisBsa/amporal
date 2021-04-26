import styled from 'styled-components/native';
import {LIGHT, PRIMARY, SECONDARY} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin: 2.5% 5%;
  color: ${LIGHT};
`;

export const SaveButtonArea = styled.TouchableHighlight`
  width: 60%;
  height: 50px;
  align-self: center;
  background-color: ${SECONDARY};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
`;

export const SaveButtonText = styled.Text`
  color: ${LIGHT};
  font-size: 24px;
  font-weight: bold;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ExerciciosList = styled.FlatList``;

export const AltText = styled.Text`
  color: ${LIGHT};
  font-size: 16px;
  font-weight: bold;
  margin: 2.5% 5%;
`;
