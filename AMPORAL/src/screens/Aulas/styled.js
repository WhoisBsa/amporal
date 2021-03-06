import styled from 'styled-components/native';
import { DARK, LIGHT, PRIMARY, RED } from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin: 2% 2%;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonArea = styled.TouchableHighlight`
  width: 40%;
  height: 50px;
  display: flex;
  align-self: center;
  background-color: ${(props) => props.color==1 ? PRIMARY : RED};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 5% 2%;
`;

export const ActionButtonText = styled.Text`
  color: ${LIGHT};
  font-size: 24px;
  font-weight: bold;
`;

export const CommentsArea = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${LIGHT};
  margin-bottom: 3%;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const CommentList = styled.FlatList`
  width: 100%;
  background-color: #fff;
`;

export const CommentText = styled.Text`
  color: ${DARK};
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px; 
`;