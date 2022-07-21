import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import EntryScreen from './screens/Entry';
import HomeScreen from './screens/Home';
import StackNav from './navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return <StackNav />;
}
