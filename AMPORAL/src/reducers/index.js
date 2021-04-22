import { combineReducers } from 'redux';
import userReducer from './userReducer';
import aulaReducer from './aulaReducer';
import comentariosReducer from './comentariosReducer';

export default combineReducers({
  userReducer,
  aulaReducer,
  comentariosReducer,
});
