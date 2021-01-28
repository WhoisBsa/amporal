import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
// import HomeStack from './HomeStack';

export default createAppContainer(
  createStackNavigator(
    {
      Preload,
      Login,
      Cadastro,
      // HomeStack,
    },
    {
      initialRouteName: 'Preload',
      defaultNavigationOptions: {
        headerShown: false,
        cardStyle: {backgroundColor: 'dodgerblue'},
      },
    },
  ),
);
