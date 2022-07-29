import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from '../components/Screens/Entry';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    //must change
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Entry"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Entry" component={EntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;