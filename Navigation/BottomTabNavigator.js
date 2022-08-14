import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFonts } from 'expo-font';
import Entry from '../Screens/Entry';
import Home from '../Screens/Home';

import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import SignUp from '../Screens/SignUp';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default (props) => {
  let [fontsLoaded] = useFonts({
    jost: require('../assets/Jost/Jost-VariableFont_wght.ttf'),
    creamCake: require('../assets/CreamCake.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={'Login'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Login') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Sign-Up') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',

          labelStyle: {
            fontSize: 14,
            fontFamily: 'Jost',
          },
          labelPosition: 'below-icon',
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen name="Login" component={Entry} />
        <Tab.Screen name="Sign-Up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
