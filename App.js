import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/mainScreen';
import LoginScreen from './screens/LoginScreen';
import ServiceScreen from './screens/ServiceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sisäänkirjautuminen" component={LoginScreen} />
        <Stack.Screen name="Etusivu" component={MainScreen} />
        <Stack.Screen name="Palvelut" component={ServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

