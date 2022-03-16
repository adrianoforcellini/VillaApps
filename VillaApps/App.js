import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.home_container}>
      <Image source={require('./Images/Logo.png')} style={styles.logo}></Image>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {},
  home_container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
