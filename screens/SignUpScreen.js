import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function SignUpScreen({ navigation }) {
    const [sposti, setSposti] = useState('');
    const [salasana, setSalasana] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, sposti, salasana);
            Alert.alert("Käyttäjä luotu onnistuneesti !");
            navigation.replace('Sisäänkirjautuminen');
        } catch (error) {
            Alert.alert("Virhe: ", error.message);
        }
    };

    return (
        <View style={tyylit.kontti}>
          <Text style={tyylit.otsikko}>Luo käyttäjä</Text>
          <TextInput
            placeholder="Sähköposti"
            style={tyylit.syote}
            value={sposti}
            onChangeText={setSposti}
          />
          <TextInput
            placeholder="Salasana"
            style={tyylit.syote}
            secureTextEntry
            value={salasana}
            onChangeText={setSalasana}
          />
          <Button title="Rekisteröidy" onPress={handleSignUp} color="#5C4033" />
        </View>
      );
    }
    
    const tyylit = StyleSheet.create({
      kontti: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E6D3B3',
        justifyContent: 'center',
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
        paddingHorizontal: 10,
      },
    });

