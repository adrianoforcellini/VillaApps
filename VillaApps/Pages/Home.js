import React, {useEffect} from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  useEffect(() => {
    const getStorage = async () => {
      try {
        listEvents = await AsyncStorage.getItem('@VillaAppsReminders');
        if (!listEvents) {
          await AsyncStorage.setItem('@VillaAppsReminders', '[]');
        }
      } catch (e) {
        alert(e);
      }
    };
    getStorage();
  }, []);

  return (
    <View style={styles.home_container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
      <View style={styles.create_event}>
        <Button
          title="Crie Um Lembrete"
          color="#5bd657"
          onPress={() => navigation.navigate('CreateEvent')}></Button>
      </View>
      <View style={styles.show_events}>
        <Button
          title=" Seus Lembretes "
          color="#5bd657"
          onPress={() => navigation.navigate('ShowEvents')}></Button>
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
