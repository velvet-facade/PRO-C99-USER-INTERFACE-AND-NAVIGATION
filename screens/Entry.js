import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// You can import from local files
import HomeScreen from './Home';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

let customFonts = {
  Jost: require('../assets/Jost-VariableFont_wght.ttf'),
};

export default class EntryScreen extends Component {
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
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.subHeader}>Welcome to</Text>
          <Text style={styles.header}>Health Manager</Text>
          <br />
          <TextInput
            placeholder="Enter your Email address"
            placeholderTextColor="#7700e6"
            style={styles.textInput}
          />
          <br />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#7700e6"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <br />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    background: 'linear-gradient(#7700e6,#b300b3)',
    padding: 8,
  },
  textInput: {
    backgroundColor: '#f3e6ff',
    height: 50,
    textAlign: 'center',
    border: 'solid',
    borderRadius: 10,
    fontFamily: 'Jost',
    fontSize: 15,
  },
  subHeader: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Jost',
    fontSize: 20,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Jost',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    background: 'linear-gradient(#ffdab3,#ffb3b3)',
    width: '30%',
    height: 45,
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 10,
    border: 'solid',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#990099',
    fontFamily: 'Jost',
  },
});
