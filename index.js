/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {GlobalProvider} from './src/context/GlobalState';

const RootApp = () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};

AppRegistry.registerComponent(appName, () => RootApp);
