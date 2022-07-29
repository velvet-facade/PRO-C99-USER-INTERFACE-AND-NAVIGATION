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
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
// You can import from local files
import MyFonts from '../loadFonts';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class EntryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <KeyboardAvoidingView>
          <View>
            <Text style={{ fontFamily: 'LobsterTwo' }}>Health Manager</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#53BF9D',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
