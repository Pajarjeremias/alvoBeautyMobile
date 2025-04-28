import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import Toast from 'react-native-toast-message';

export default function LoginScreen({ navigation }) {
  const [sposti, setSposti] = useState('');
  const [salasana, setSalasana] = useState('');

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Sisäänkirjautuminen onnistui !',
      text2: 'Tervetuloa Alvo Beautyn mobiili sovellukseen.',
      position: 'top',
      visibilityTime: 4500,
    });
  }
  const denyToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Ongelma sisäänkirjautumisessa !',
      text2: 'Kokeile uudelleen',
      position: 'top',
      visibilityTime: 4500,
    });
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, sposti, salasana);
      successToast();
      navigation.replace('Alvo Beauty');
    } catch (error) {
      denyToast();
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
      <Button title="Luo uusi käyttäjä"
      onPress={() => navigation.navigate('Rekisteröidy')}
      color="#D9A084"
       />
       <Button title="Kirjaudu"
       onPress={handleLogin}
       color="#D9A084"
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
    backgroundColor: '#F4EAE1'
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
