/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'dripsy';

import {Dripsy} from './Dripsy';
import {MyComponent} from './MyComponent';

const App = () => {
  return (
    <Dripsy>
      <AppRoot />
    </Dripsy>
  );
};

const AppRoot = () => {
  return (
    <SafeAreaView
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MyComponent />
    </SafeAreaView>
  );
};

export default App;
