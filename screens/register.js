import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-ionicons';

let bgImgReg = require('../assets/bgReg.png');

//importing local files
import JostFont from '../components/LoadFonts';

export default class RegisterScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ImageBackground
          source={bgImgReg}
          resizeMode="cover"
          style={styles.Container}>
          <Text style={{ fontFamily: 'Jost', color: '#fff' }}>Lorem Ipsum</Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
