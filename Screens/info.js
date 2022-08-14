import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Info extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Information</Text>
          </View>
          <View style={styles.asmrContainer}>
            <Card>
              <View style={{ padding: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name={'help-circle'}
                    size={14}
                    color={'black'}
                    style={{ marginTop: 2 }}
                  />
                  <Text style={{ marginLeft: 6, fontFamily: 'jost' }}>
                    What is ASMR?
                  </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontFamily: 'jost' }}>
                    A 2015 study published in PeerJ looked into ASMR and
                    suggested it can improve mood and even pain symptoms through
                    various common triggers, including whispering, personal
                    attention, crisp sounds, and slow movements.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        'https://www.vox.com/2015/7/15/8965393/asmr-video-youtube-autonomous-sensory-meridian-response'
                      );
                      alert('Open a webpage?');
                    }}>
                    <Text style={{ fontFamily: 'jost', color: 'blue' }}>
                      Source & Siting...
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card style={{ marginTop: 15 }}>
              <View style={{ padding: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name={'help-circle'}
                    size={14}
                    color={'black'}
                    style={{ marginTop: 2 }}
                  />
                  <Text style={{ marginLeft: 5, fontFamily: 'jost' }}>
                    Lorem Ipsum
                  </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontFamily: 'jost' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius laoreet ipsum sed molestie. Nam lectus
                    neque, rhoncus eu tortor porttitor, pulvinar convallis
                    tellus. In scelerisque erat sit amet elit consequat rhoncus.
                    Suspendisse cursus eu urna vitae tincidunt. Cras varius
                    lacus in malesuada sollicitudin. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc vitae odio turpis. Sed
                    commodo ipsum odio, sit amet sagittis mauris pretium a.
                    Fusce turpis quam, commodo et ultricies et, dignissim vel
                    sem. Duis vehicula id metus et efficitur. Ut eu tortor eu
                    urna accumsan bibendum sed pellentesque justo. In ante
                    nulla, sodales sit amet euismod at, gravida nec nisi.
                    Maecenas venenatis quam ac nunc tincidunt euismod. Aliquam
                    dictum viverra lectus, id vulputate lectus. Morbi tincidunt
                    efficitur leo, quis condimentum turpis molestie a.
                    Suspendisse vulputate scelerisque feugiat.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        'https://www.vox.com/2015/7/15/8965393/asmr-video-youtube-autonomous-sensory-meridian-response'
                      );
                      alert('Open a webpage?');
                    }}>
                    <Text style={{ fontFamily: 'jost', color: 'blue' }}>
                      Source & Siting...
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#B4FE98',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 8,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e8e8e8',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'jost',
    fontSize: 20,
    textAlign: 'center',
  },
  asmrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
