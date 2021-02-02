import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../screens/Profile';
// import Settings from '../screens/Settings';

export default createAppContainer(
  createStackNavigator(
    {
      Profile,
      // Settings,
    },
    {
      initialRouteName: 'Profile',
      defaultNavigationOptions: {
        headerShown: true,
        cardStyle: {backgroundColor: '#FFF'},
      },
    },
  ),
);
