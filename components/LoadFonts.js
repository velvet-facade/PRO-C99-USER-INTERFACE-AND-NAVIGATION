import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let customFonts = {
  Jost: require('../assets/Jost-VariableFont_wght.ttf'),
}

// You can import from local files
import EntryScreen from '../screens/Entry';
import HomeScreen from '../screens/Home';
import StackNav from '../navigation/stack';

export default class JostFont extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  
  render(){
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return <EntryScreen/> , <StackNav/>
    }
  }
}

