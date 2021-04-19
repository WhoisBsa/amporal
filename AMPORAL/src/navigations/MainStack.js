import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import AppTab from './AppTab';
import Settings from '../screens/UserSettings';

export default createAppContainer(
  createStackNavigator(
    {
      Preload,
      Login,
      Cadastro,
      AppTab,
      Settings,
    },
    {
      initialRouteName: 'Preload',
      defaultNavigationOptions: {
        headerShown: false,
        cardStyle: { backgroundColor: 'dodgerblue' },
      },
    },
  ),
);
