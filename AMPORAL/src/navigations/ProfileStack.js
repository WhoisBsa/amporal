import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../screens/Profile';

export default createAppContainer(
  createStackNavigator(
    {
      Profile,
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
