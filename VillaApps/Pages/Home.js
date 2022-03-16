import React from 'react';
import {StyleSheet, Text, Image, View, Button} from 'react-native';

const Home = () => {
  return (
    <View style={styles.home_container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
      <Text>App</Text>
      <Button
        title="Create Event"
        color="#5bd657"
        style={styles.create_event}></Button>
      <Button
        title="Show Events"
        color="#5bd657"
        style={styles.show_events}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  create_event: {
    marginTop: '40%',
  },
  show_events: {
    marginTop: '40%',
  },
  logo: {
    marginTop: '20%',
  },
  home_container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
  },
});

export default Home;
