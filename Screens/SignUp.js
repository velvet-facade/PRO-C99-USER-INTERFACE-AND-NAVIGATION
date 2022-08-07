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
  Image,
  Component,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import StackNavigator from '../Navigation/StackNavigator';

export default class SignUp extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <KeyboardAvoidingView style={{ padding: 15 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'CreamCake',
                  fontSize: 40,
                  color: '#fff',
                }}>
                Health Manager
              </Text>
              <Text style={{ color: '#fff', fontFamily: 'Jost' }}>
                your health tracker in one place.
              </Text>
              <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Jost' }}>
                create a new account
              </Text>
              <TextInput
                placeholder="Enter email"
                placeholderTextColor="#87006c"
                style={{
                  fontFamily: 'Jost',
                  height: Platform.OS === 'android' ? 50 : 40,
                  marginTop: 15,
                  padding: 15,
                  borderRadius: 25,
                  backgroundColor: '#cf9bc4',
                  width: '100%',
                }}
              />
              <TextInput
                placeholder="Enter password"
                placeholderTextColor="#87006c"
                secureTextEntry
                style={{
                  fontFamily: 'Jost',
                  height: Platform.OS === 'android' ? 50 : 40,
                  marginTop: 15,
                  padding: 15,
                  borderRadius: 25,
                  backgroundColor: '#cf9bc4',
                  width: '100%',
                }}
              />
              <TouchableOpacity
                onPress={this.onLoginPress}
                style={{
                  backgroundColor: '#cf9bc4',
                  padding: 10,
                  borderRadius: 25,
                  marginTop: 10,
                }}>
                <Text style={{ fontFamily: 'Jost', color: '#87006c' }}>
                  Create an account
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textInput1}>
                <Image
                  source={require('../assets/google.png')}
                  style={{ width: 20, height: 20, alignSelf: 'center' }}
                />
                <Text style={styles.btnText}>Login with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textInput1}>
                <Image
                  source={require('../assets/facebook.png')}
                  style={{ width: 20, height: 20, alignSelf: 'center' }}
                />
                <Text style={styles.btnText}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textInput1}>
                <Image
                  source={require('../tweet.jpg')}
                  style={{ width: 21, height: 21, alignSelf: 'center' }}
                />
                <Text style={styles.btnText}>Login with Twitter</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }

  onLoginPress = () => {
    this.props.navigation.navigate('Home');
  };
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#7D1E6A',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  textInput1: {
    backgroundColor: '#cf9bc4',
    fontFamily: 'Jost',
    height: Platform.OS === 'android' ? 50 : 40,
    marginTop: 15,
    padding: 12,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
  },
  btnText: {
    textAlign: 'center',
    color: '#87006c',
    fontFamily: 'Jost',
    marginLeft: '25%',
  },
});
