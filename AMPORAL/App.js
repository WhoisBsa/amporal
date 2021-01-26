import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';
import {StatusBar} from 'react-native';

import MainStack from './src/navigations/MainStack';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="dodgerblue" />
        <MainStack />
      </PersistGate>
    </Provider>
  );
};
