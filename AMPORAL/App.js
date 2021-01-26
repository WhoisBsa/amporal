import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';
import {StatusBar} from 'react-native';
import NavigationBar from 'react-native-navbar-color';

import MainStack from './src/navigations/MainStack';

export default () => {
  NavigationBar.setColor('#1E90FF');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="dodgerblue" barStyle="light-content" />
        <MainStack />
      </PersistGate>
    </Provider>
  );
};
