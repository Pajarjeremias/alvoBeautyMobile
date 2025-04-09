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
          <Button title="Kirjaudu" onPress={handleLogin} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
      },
      title: {
        fontSize: 28,
        marginBottom: 24,
        textAlign: 'center',
      },
      input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 12,
        borderRadius: 6,
      },
    });