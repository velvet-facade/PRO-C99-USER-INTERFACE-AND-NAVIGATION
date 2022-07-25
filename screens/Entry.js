//NOTE FOR VIEWER: PLEASE VIEW IN 100% FOR COMPONENTS TO WORK PROPERLY.
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
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-ionicons';
import { IoMailOpenOutline } from 'react-icons/io5';
// You can import from local files

import HomeScreen from './Home';

import MeraFonts from '../components/LoadFonts';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const bgImg = require('../assets/background.png');

export default class EntryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ImageBackground
            source={bgImg}
            resizeMode="cover"
            style={{ flex: 1 }}>
            <ScrollView>
              <View style={{ margin: 8 }}>
                <View style={styles.headerContainer}>
                  <Text style={styles.appHeader}>Health Manager</Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder={'Enter email'}
                    placeholderTextColor="#15193c"
                    style={styles.textInput}
                    //onChangeText={() => }
                  />
                  <TextInput
                    placeholder={'Enter password'}
                    placeholderTextColor="#15193c"
                    style={styles.textInput}
                    secureTextEntry
                    //onChangeText={() => }
                  />
                  <TouchableOpacity style={{ padding: 2 }}>
                    <Text
                      style={{
                        fontFamily: 'Jost',
                        marginTop: 5,
                        color: '#ba853e',
                        textDecorationLine: 'underline',
                      }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <TouchableOpacity
                    style={styles.logBtn}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{ fontFamily: 'Jost', textAlign: 'center' }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginTop: Platform.OS === 'web' ? 10 : 10 }}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text
                      style={{
                        fontFamily: 'Jost',
                        color: '#ba853e',
                        textDecorationLine: 'underline',
                      }}>
                      new member? Sign up for free!
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.google}>
                    <Image
                      source={require('../assets/google.png')}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: 'Jost',
                        color: '#d93f21',
                      }}>
                      Login with Google
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.fb}>
                    <Image
                      source={require('../assets/facebook.png')}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#375791',
                        fontFamily: 'Jost',
                      }}>
                      Login with Facebook
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#d7dec5',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appHeader: {
    fontFamily: 'StylishCalifornia',
    fontSize: Platform.OS === 'web' ? 30 : 30,
    marginTop: Platform.OS === 'web' ? 65 : 150,
    textDecorationLine: 'underline',
    color: '#263600',
  },
  textInput: {
    backgroundColor: '#badaa4',
    fontFamily: 'Jost',
    height: 30,
    padding: 20,
    width: '95%',
    marginTop: 5,
    color: '#15193c',
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 1,
  },
  inputContainer: {
    marginTop: Platform.OS === 'web' ? 80 : 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logBtn: {
    width: '95%',
    backgroundColor: '#badaa4',
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  google: {
    backgroundColor: '#ffdedb',
    marginTop: 5 * 2,
    width: '95%',
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fb: {
    backgroundColor: '#c9dcff',
    marginTop: 5 * 2,
    width: '95%',
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
