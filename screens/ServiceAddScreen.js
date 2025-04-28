import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Image } from 'react-native';
import { app } from '../firebase/config';
import { getDatabase, ref, push } from 'firebase/database';
import Toast from 'react-native-toast-message';

const db = getDatabase(app);

export default function ServiceAddScreen({}) {

  const [palvelu, setPalvelu] = useState({
    nimi: '',
    hinta: ''
  });

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Tuotteen lisääminen onnistui !',
      text2: 'Lisää lisää tuotteita',
      position: 'top',
      visibilityTime: 4000,
    });
  }
  const denyToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Ongelma tuotten lisäyksessä !',
      text2: 'Kokeile uudelleen',
      position: 'top',
      visibilityTime: 4000,
    });
  }


  const handleSave = () => {
    if (palvelu.hinta && palvelu.nimi) {
      push(ref(db, 'kohde/'), palvelu)
      .then(() => successToast());
      } else {
        denyToast();
      }
    }


  return (  
    <View style={tyylit.kontti}>

    <TextInput 
      placeholder='Palvelun nimi' 
      onChangeText={text => setPalvelu({...palvelu, nimi: text})}
      value={palvelu.nimi}
      style={tyylit.syote}/>

    <TextInput 
      placeholder='Hinta' 
      onChangeText={text => setPalvelu({...palvelu, hinta: text})}
      value={palvelu.hinta}
      style={tyylit.syote}/>

      <View style={tyylit.tallenna}>
      <Button onPress={handleSave} title="Tallenna" color="#D9A084" />
      </View>

      <Image
        source={require('../assets/absalon.jpg')}
        style={tyylit.logo}/>

    </View>
  );
}

const tyylit = StyleSheet.create({
  kontti: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#F4EAE1',
    fontSize: 25,
  },
  syote: {
    height: 50,
    width: '80%',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
tallenna: {
  width: '80%',
  fontSize: 18,
},
logo: {
  width: 350,
  height: 350,
  alignSelf: 'center',
  marginTop: 70,
  borderRadius: 75

},
});