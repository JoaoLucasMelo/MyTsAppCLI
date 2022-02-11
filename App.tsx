import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './components/Tab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './components/store/ProductDetails';
import Store from './screens/Store';

const App = () => {
  console.warn = () => {};

  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
