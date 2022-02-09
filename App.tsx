import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './components/Tab';

const Stack = createNativeStackNavigator();

const App = () => {
  console.warn = () => {};

  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
