import React from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';

const Home = () => {
  return (
    <View style={styles.home_container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
      <View style={styles.create_event}>
        <Button title="Create Event" color="#5bd657"></Button>
      </View>
      <View style={styles.show_events}>
        <Button title="Show Events" color="#5bd657"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  create_event: {
    marginTop: '20%',
  },
  show_events: {
    marginTop: '20%',
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
