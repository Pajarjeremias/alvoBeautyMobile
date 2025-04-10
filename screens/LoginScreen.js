import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../firebase/config';

export default function LoginScreen({ navigation }) {
    const handleLogin = () => {
        navigation.replace('Etusivu');
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Kirjaudu sisään</Text>
          <TextInput placeholder="Sähköposti" style={styles.input} />
          <TextInput placeholder="Salasana" style={styles.input} secureTextEntry />
          <Button title="Kirjaudu" onPress={handleLogin} color="#5C4033" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E6D3B3'
      },
      title: {
        fontSize: 30,
        marginBottom: 25,
        textAlign: 'center',
      },
      input: {
        height: 50,
        borderColor: '#FFFFFF',
        borderWidth: 3,
        marginBottom: 20,
        borderRadius: 10,
      },
    });