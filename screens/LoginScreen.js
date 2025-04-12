import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { auth } from '../firebase/config';
//import { initializeAuth, indexedDBLocalPersistence, signInWithEmailAndPassword } from 'firebase/auth';
//import { app } from '../firebase/config';

//const firebaseAuth = initializeAuth(app, {
  //persistence: [indexedDBLocalPersistence]
//});

export default function LoginScreen({ navigation }) {
  //const [sposti, setSposti] = useState('');
  //const [salasana, setSalasana] = useState('');

    const handleLogin = () => {
        navigation.replace('Etusivu');
      };
    
      return (
        <View style={tyylit.kontti}>
          <Text style={tyylit.otsikko}>Kirjaudu sisään</Text>
          <TextInput placeholder="Sähköposti" style={tyylit.syote} />
          <TextInput placeholder="Salasana" style={tyylit.syote} secureTextEntry />
          <Button title="Kirjaudu" onPress={handleLogin} color="#5C4033" />
        </View>
      );
    }
    
    const tyylit = StyleSheet.create({
      kontti: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E6D3B3'
      },
      otsikko: {
        fontSize: 30,
        marginBottom: 25,
        textAlign: 'center',
      },
      syote: {
        height: 50,
        borderColor: '#FFFFFF',
        borderWidth: 3,
        marginBottom: 20,
        borderRadius: 10,
      },
    });