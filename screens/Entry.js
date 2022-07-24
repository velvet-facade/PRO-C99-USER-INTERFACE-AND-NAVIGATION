import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-ionicons';

// You can import from local files
import HomeScreen from './Home';
import RegisterScreen from './register';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const bgImg = require('../assets/bgEntry.png');

export default class EntryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ImageBackground
          source={bgImg}
          resizeMode="cover"
          style={styles.container}>
          <Text style={styles.subHeader}>Welcome to</Text>
          <Text style={styles.header}>Health Manager</Text>
          <TextInput
            placeholder="Enter your Email address"
            placeholderTextColor="#7700e6"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#7700e6"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ 
              color: '#fff', 
              fontSize: 15, 
              fontFamily: 'Jost' }}>
              or
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#fff',
                  textDecorationLine: 'underline',
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'Jost',
                }}>
                Sign up today. Its free!
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  textInput: {
    backgroundColor: '#f3e6ff',
    color: '#7700e6',
    height: 50,
    textAlign: 'center',
    border: 'solid',
    borderRadius: 10,
    fontFamily: 'Jost',
    fontSize: 15,
    marginVertical: 10,
  },
  subHeader: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Jost',
    fontSize: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Jost',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
  btn: {
    width: 100,
    height: 45,
    borderRadius: 10,
    paddingTop: 10,
    borderColor: '#7700e6',
    borderWidth: 2,
    backgroundColor: '#f3e6ff',
    marginTop: 5,
  },
  btnText: {
    color: '#7700e6',
    fontSize: 15,
    fontFamily: 'Jost',
    textAlign: 'center',
  },
  droidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
