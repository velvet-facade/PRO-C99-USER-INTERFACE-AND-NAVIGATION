import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from '../screens/Entry';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();
const StackNav = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Entry" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default StackNav;