import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
export default (props) => {
  let [fontsLoaded] = useFonts({
    jost: require('../assets/Jost/Jost-VariableFont_wght.ttf'),
    creamCake: require('../assets/CreamCake.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <View>Hello world</View>;
  }
};
