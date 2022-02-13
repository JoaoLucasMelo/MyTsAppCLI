import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import PageTwo from '../screens/PageTwo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Store from '../screens/Store';
import NotesScreen from '../screens/NotesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './store/ProductDetails';

const Tab = () => {
  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        options={{headerShown: false}}
        component={Store}
      />
      <Stack.Screen
        name="Product Details"
        options={{headerTitleAlign: 'center', statusBarAnimation: 'slide'}}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 56}
      }}>
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          headerStyle: {backgroundColor: '#2a7dd1'},
          headerTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, paddingBottom: 3},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="notebook-multiple"
              color={color}
              size={size}
            />
          ),
          tabBarActiveBackgroundColor: '#2a7dd1',
          tabBarActiveTintColor: 'white'
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PageTwo}
        options={{
          headerStyle: {backgroundColor: '#2a7dd1'},
          headerTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, paddingBottom: 3},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="pokeball" color={color} size={size} />
          ),
          tabBarActiveBackgroundColor: '#2a7dd1',
          tabBarActiveTintColor: 'white'
        }}
      />
      <Tab.Screen
        name="Store"
        component={StackNavigator}
        options={{
          headerStyle: {backgroundColor: '#2a7dd1'},
          headerTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, paddingBottom: 3},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveBackgroundColor: '#2a7dd1',
          tabBarActiveTintColor: 'white'
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab;
