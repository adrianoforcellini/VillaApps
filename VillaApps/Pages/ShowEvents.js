import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const ShowEvents = () => {
  const [show, setShow] = useState(false);
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState('');
  const [IdEditing, setIdEditing] = useState('');
  const [editingDate, setEditingDate] = useState(new Date());

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
    SetEditingDate(currentDate);
  };

  const deleteEvent = async id => {
    const newEvents = events.filter(obj => obj.id !== id);
    setEvents(newEvents);
    try {
      await AsyncStorage.setItem(
        '@VillaAppsReminders',
        JSON.stringify(newEvents),
      );
    } catch (e) {
      alert(e);
    }
  };

  const editEvent = async (id, text) => {
    setEditing(true);
    setEditingText(text);
    setIdEditing(id);
  };

  const saveEditing = id => {
    const newObj = {
      id,
      text: editingText,
      date: editingDate.toLocaleString(),
    };
    alert(newObj.id);
    alert(newObj.text);
    alert(newObj.date);
  };
  return (
    <ScrollView>
      <View style={styles.show_events_container}>
        {editing && (
          <View style={styles.create_event_container}>
            <TextInput
              numberOfLines={4}
              style={styles.input}
              value={editingText}
              onChangeText={text => setEditingText(text)}
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
                onPress={() => saveEditing(IdEditing)}
                title="Salvar Lembrete"
              />
            </View>
          </View>
        )}
        {events.length > 0 &&
          events.map(event => (
            <View key={event.id} style={styles.event_card}>
              <Text style={styles.event_card_text}>{event.text}</Text>
              <Text style={styles.event_card_text}>{event.date}</Text>
              <Button
                color="#5bd657"
                onPress={() => editEvent(event.id, event.text)}
                title="Editar Lembrete"
              />
              <Button
                color="#5bd657"
                onPress={() => deleteEvent(event.id)}
                title="Apagar Lembrete"
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  show_events_container: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },
  event_card: {
    backgroundColor: 'whitesmoke',
    marginTop: '10%',
  },
  event_card_text: {
    textAlign: 'center',
  },
});

export default ShowEvents;
