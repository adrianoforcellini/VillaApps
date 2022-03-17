import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View, Text, Button, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const ShowEvents = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getStorage = async () => {
      try {
        listEvents = await AsyncStorage.getItem('@VillaAppsReminders');
        setEvents(JSON.parse(listEvents));
      } catch (e) {
        alert(e);
      }
    };
    getStorage();
  }, []);

  return (
    <View style={styles.show_events_container}>
      {events.length > 0 &&
        events.map(event => (
          <View key={event.id} style={styles.event_card}>
            <Text>{event.id}</Text>
            <Text>{event.text}</Text>
            <Text>{event.date}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  show_events_container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
  },
  event_card: {
    backgroundColor: 'white',
    marginTop: '10%',
  },
});

export default ShowEvents;
