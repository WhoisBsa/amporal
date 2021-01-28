import styled from 'styled-components/native';
import {PRIMARY} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;
