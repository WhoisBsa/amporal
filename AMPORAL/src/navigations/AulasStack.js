import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Aulas from '../screens/Aulas';

export default createAppContainer(
  createStackNavigator(
    {
      Aulas,
    },
    {
      initialRouteName: 'Aulas',
      defaultNavigationOptions: {
        headerShown: true,
        cardStyle: {backgroundColor: '#FFF'},
      },
    },
  ),
);
