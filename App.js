import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import EntryScreen from './screens/Entry';
import HomeScreen from './screens/Home';
import JostFont from './components/LoadFonts';
import StackNav from './navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component{
  render(){
    return <JostFont/>
  }
}