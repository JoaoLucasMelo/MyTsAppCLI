import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import PageTwo from '../screens/PageTwo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PageThree from '../screens/PageThree';
import NotesScreen from '../screens/NotesScreen';

const Tab = () => {
  const Tab = createBottomTabNavigator();

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
        name="Second"
        component={PageTwo}
        options={{
          headerStyle: {backgroundColor: '#2a7dd1'},
          headerTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, paddingBottom: 3},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="blur" color={color} size={size} />
          ),
          tabBarActiveBackgroundColor: '#2a7dd1',
          tabBarActiveTintColor: 'white'
        }}
      />
      <Tab.Screen
        name="Third"
        component={PageThree}
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
