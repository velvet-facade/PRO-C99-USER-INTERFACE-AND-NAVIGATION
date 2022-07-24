import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-ionicons';

let bgImgReg = require('../assets/bgReg.png');

export default class RegisterScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={bgImgReg}
        resizeMode="cover"
        style={styles.container}>
        <Text>Lorem Ipsum</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
