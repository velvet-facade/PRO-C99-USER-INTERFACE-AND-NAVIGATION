import React, { Component } from 'react';
import { Text, View, StyleSheet, Font } from 'react-native';

// You can import from local files
import EntryScreen from './components/Screens/Entry';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import AppLoading from 'expo-app-loading';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EntryScreen />
      </View>
    );
  }
}
