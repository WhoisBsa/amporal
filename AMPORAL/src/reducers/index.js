import { combineReducers } from 'redux';
import userReducer from './userReducer';
import aulaReducer from './aulaReducer';

export default combineReducers({
  userReducer,
  aulaReducer,
});
