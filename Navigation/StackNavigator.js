import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from '../Screens/Entry';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import { useFonts } from 'expo-font';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator(props) {
  let [fontsLoaded] = useFonts({
    jost: require('../assets/Jost/Jost-VariableFont_wght.ttf'),
    creamCake: require('../assets/CreamCake.otf'),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          <Stack.Screen name="Login" component={Entry} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
