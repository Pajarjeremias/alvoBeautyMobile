import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/mainScreen';
import LoginScreen from './screens/LoginScreen';
import ServiceScreen from './screens/ServiceScreen';
import ServiceAddScreen from './screens/ServiceAddScreen';
import SignUpScreen from './screens/SignUpScreen';
import AbWebView from './components/AbWebView';
import Toast from 'react-native-toast-message';
import AbAboutUsWebView from './components/AbAboutUsWebView';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HampurilaisNavigaattori() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Etusivu" component={MainScreen} />
      <Drawer.Screen name="Palvelut" component={ServiceScreen} />
      <Drawer.Screen name="Ajanvaraus" component={AbWebView} />
      <Drawer.Screen name="Meistä" component={AbAboutUsWebView} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Sisäänkirjautuminen" component={LoginScreen} />
        <Stack.Screen name="Rekisteröidy" component={SignUpScreen} />
        <Stack.Screen name="Lisää palvelu" component={ServiceAddScreen} />
        <Stack.Screen name="Alvo Beauty" component={HampurilaisNavigaattori} />
        </Stack.Navigator>
        <Toast />
        </NavigationContainer>
  );
}