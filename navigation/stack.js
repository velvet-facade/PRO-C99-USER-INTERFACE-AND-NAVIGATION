import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from '../screens/Entry';
import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/register';

const Stack = createStackNavigator();
const StackNav = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Entry" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default StackNav;