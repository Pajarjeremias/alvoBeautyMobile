import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function LoginScreen({ navigation }) {
  const [sposti, setSposti] = useState('');
  const [salasana, setSalasana] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, sposti, salasana);
      navigation.replace('Etusivu');
    } catch (error) {
      Alert.alert("Virhe", error.message);
    }
  };

  return (
    <View style={tyylit.kontti}>
      <Text style={tyylit.otsikko}>Kirjaudu sisään</Text>

      <TextInput 
        placeholder="Sähköposti" 
        style={tyylit.syote} 
        value={sposti} 
        onChangeText={setSposti}
        autoCapitalize="none"
      />

      <TextInput 
        placeholder="Salasana" 
        style={tyylit.syote} 
        secureTextEntry 
        value={salasana} 
        onChangeText={setSalasana}
      />

      <View style={tyylit.painikeet}>
      <Button title="Kirjaudu"
       onPress={handleLogin}
       color="#5C4033"
        />

      <Button title="Luo uusi käyttäjä"
      onPress={() => navigation.navigate('Rekisteröidy')}
      color="#5C4033"
       />

      </View>

      <Image
      source={require('../assets/ablogo.png')}
      style={tyylit.logo}
      />

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
    marginBottom: 30,
    textAlign: 'center',
  },
  syote: {
    fontSize: 17,
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    marginBottom: 20,
  },
  painikeet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
  width: 300,
  height: 300,
  alignSelf: 'center',
  marginTop: 30,
  borderRadius: 75

  },
});
