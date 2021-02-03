import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Aulas from '../screens/Aulas';
// import Settings from '../screens/Settings';

export default createAppContainer(
  createStackNavigator(
    {
      Aulas,
      // Settings,
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
