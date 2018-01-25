/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 入口文件
 * @flow
 */

import React, { PureComponent } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

import AppWithNavigationState from './navigators/AppNavigator';

const store = configureStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;