import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { app } from '../firebase/config';
import { getDatabase, ref, push } from 'firebase/database';

const db = getDatabase(app);

export default function ServiceAddScreen() {

  const [palvelu, setPalvelu] = useState({
    nimi: '',
    hinta: ''
  });
  const [kohde, setKohde] = useState([]);


  const handleSave = () => {
    if (palvelu.hinta && palvelu.nimi) {
    push(ref(db, 'kohde/'), palvelu);
    } else {
      Alert.alert("Virhe ilmoitus: Kirjoita palvelu ja hinta")
    }
  }


  return (  
    <View style={tyylit.kontti}>
      <TextInput 
        placeholder='Palvelun nimi' 
        onChangeText={text => setPalvelu({...palvelu, nimi: text})}
        value={palvelu.nimi}/>  
      <TextInput 
        placeholder='hinta' 
        onChangeText={text => setPalvelu({...palvelu, hinta: text})}
        value={palvelu.hinta}/>   
      <Button onPress={handleSave} title="Talenna" /> 
    </View>
  );
}

const tyylit = StyleSheet.create({
  kontti: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#E6D3B3',
    fontSize: 25,
  },
  title: {
    fontSize: 30,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
},
});