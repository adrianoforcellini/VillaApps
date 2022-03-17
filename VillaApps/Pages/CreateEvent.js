import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = () => {
  const [reminder, setReminder] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
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
          onPress={showDatepicker}
          title="Escolha A Data Do Lembrete"
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
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
