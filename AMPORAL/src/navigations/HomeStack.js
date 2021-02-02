import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
// import Settings from '../screens/Settings';

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      // Settings,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerShown: true,
        cardStyle: {backgroundColor: '#FFF'},
      },
    },
  ),
);
