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
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import StackNavigator from '../Navigation/StackNavigator';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';

export default class Entry extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <KeyboardAvoidingView style={{ padding: 15 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'creamCake',
                  fontSize: 50,
                  color: '#fff',
                }}>
                Health Manager
              </Text>

              <Text style={styles.fffTextjost}>
                your health tracker in one place.
              </Text>
            </View>

            <View>
              <TextInput
                placeholder="Enter email *"
                placeholderTextColor="#1b4034"
                style={styles.textInput}
                onChangeText={(text) => this.setState({ email: text })}
                required
              />
              <TextInput
                placeholder="Enter password *"
                placeholderTextColor="#1b4034"
                style={styles.textInput}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry
              />
            </View>
            <TouchableOpacity>
              <View style={styles.forgotpw}>
                <Text style={styles.fffTextjost}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigate('Home')}
                style={styles.logBtn}>
                <Text style={{ fontFamily: 'Jost', color: '#1b4034' }}>
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigate('SignUp')}
                style={{ marginTop: 15 }}>
                <Text style={styles.fffTextjost}>
                  New member? SignUp today.
                </Text>
              </TouchableOpacity>
            </View>

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
          </KeyboardAvoidingView>
        </ScrollView>
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
  textInput: {
    backgroundColor: '#e1f2ed',
    fontFamily: 'Jost',
    height: Platform.OS === 'android' ? 50 : 40,
    marginTop: 15,
    padding: 15,
    borderRadius: 25,
  },
  forgotpw: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fffTextjost: { fontFamily: 'Jost', color: '#fff', textAlign: 'center' },

  btnText: {
    textAlign: 'center',
    color: '#1b4034',
    fontFamily: 'Jost',
    marginLeft: '25%',
  },
  textInput1: {
    backgroundColor: '#e1f2ed',
    fontFamily: 'Jost',
    height: Platform.OS === 'android' ? 50 : 40,
    marginTop: 15,
    padding: 12,
    borderRadius: 25,
    flexDirection: 'row',
  },
  logBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1f2ed',
    marginTop: 15,
    height: 35,
    width: '50%',
    borderRadius: 30,
  },
});
