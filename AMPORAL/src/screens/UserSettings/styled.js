import styled from 'styled-components/native';
import {DARK, PRIMARY} from '../../styles/colors';

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

export const DataView = styled.View`
  width: 100%;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background-color: ${PRIMARY};
  flex: 1;
`;
