import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './components/Tab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './components/store/ProductDetails';
import Store from './screens/Store';

const App = () => {
  console.warn = () => {};

  const Stack = createNativeStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
