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

const Header = ({ text }) => {
  return (
    <View
      style={{
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{ fontFamily: 'jost', fontSize: 20, textAlign: 'center' }}>
        {text}
      </Text>
    </View>
  );
};

export default Header;
