import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Component,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DashBoard extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#e8e8e8',
          shadowOffset: { width: 1, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          backgroundColor: '#fff',
        }}>
        <Text style={{ fontFamily: 'jost', fontSize: 20, textAlign: 'center' }}>
          Dashboard
        </Text>
      </View>
    );
  }
}
