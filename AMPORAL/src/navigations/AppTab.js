import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './HomeStack';
import AulasStack from './AulasStack';
import ProfileStack from './ProfileStack';

import CustomTabBar from '../components/CustomTabBar';
import {LIGHT} from '../styles/colors';

const AppTab = createBottomTabNavigator(
  {
    HomeStack,
    AulasStack,
    ProfileStack,
  },
  {
    tabBarComponent: (props) => (
      <CustomTabBar
        {...props}
        items={[
          {
            type: 'regular',
            text: 'Início',
            route: 'HomeStack',
          },
          {
            type: 'big',
            text: 'Aulas',
            route: 'AulasStack',
          },
          {
            type: 'regular',
            text: 'Perfil',
            route: 'ProfileStack',
          },
        ]}
      />
    ),
  },
  {
    defaultNavigationOptions: {
      cardStyle: {backgroundColor: LIGHT},
    },
  },
);

export default AppTab;
