import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/mainScreen';
import LoginScreen from './screens/LoginScreen';
import ServiceScreen from './screens/ServiceScreen';
import ServiceAddScreen from './screens/ServiceAddScreen';
import SignUpScreen from './screens/SignUpScreen';
import AbWebView from './components/AbWebView';
import Toast from 'react-native-toast-message';
import AbAboutUsWebView from './components/AbAboutUsWebView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sisäänkirjautuminen" component={LoginScreen} />
        <Stack.Screen name="Rekisteröidy" component={SignUpScreen} />
        <Stack.Screen name="Etusivu" component={MainScreen} />
        <Stack.Screen name="Palvelut" component={ServiceScreen} />
        <Stack.Screen name="Lisää palvelu" component={ServiceAddScreen} />
        <Stack.Screen name="Alvo Beautyn varaus järjestelmä Timma" component={AbWebView} />
        <Stack.Screen name="Meistä" component={AbAboutUsWebView} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

