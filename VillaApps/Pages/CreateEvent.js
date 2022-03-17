import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View, Text, Button, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const CreateEvent = () => {
  const [reminder, setReminder] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const createEvent = async currencyDate => {
    const now = moment();
    const momentDate = moment(currencyDate);
    const daysDiff = momentDate.diff(now, 'days') + 1;
    const reminderObj = {
      id: events.length,
      text: reminder,
      date: date.toLocaleString(),
    };

    events.push(reminderObj);

    try {
      await AsyncStorage.setItem('@VillaAppsReminders', JSON.stringify(events));
    } catch (e) {
      alert(e);
    }
    Alert.alert(
      'Lembrete Armazenado',
      `Faltam ${daysDiff} dias para este evento!!!`,
    );
  };

  return (
    <View style={styles.create_event_container}>
      <TextInput
        placeholder="Digite aqui o seu lembrete"
        numberOfLines={4}
        style={styles.input}
        onChangeText={text => setReminder(text)}
      />
      <View style={styles.button_container}>
        <Button
          color="#5bd657"
          onPress={() => setShow(true)}
          title="Escolha A Data Do Lembrete"
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <View style={styles.button_container}>
        <Button
          color="#5bd657"
          onPress={() => createEvent(date)}
          title="Salvar Lembrete"
        />
      </View>
      <Text style={styles.showdate}>selected: {date.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  showdate: {
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    marginTop: '20%',
    textAlign: 'center',
  },
  button_container: {
    marginTop: '20%',
  },
  create_event_container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
  },
});

export default CreateEvent;
