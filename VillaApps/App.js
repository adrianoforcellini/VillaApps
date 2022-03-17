import React from 'react';
import Home from './Pages/Home';
import CreateEvent from './Pages/CreateEvent';
import ShowEvents from './Pages/ShowEvents';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Villa Apps Lembretes'}}
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{title: 'Criação de Lembretes'}}
        />
        <Stack.Screen
          name="ShowEvents"
          component={ShowEvents}
          options={{title: 'Lembretes Salvos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
