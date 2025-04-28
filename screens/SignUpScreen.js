import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import Toast from 'react-native-toast-message';

export default function SignUpScreen({ navigation }) {
    const [sposti, setSposti] = useState('');
    const [salasana, setSalasana] = useState('');

    const successToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Käyttäjän luonti onnistui !',
          text2: 'Jatka sisäänkirjautumiseen',
          position: 'top',
          visibilityTime: 4000,
        });
      }
      const denyToast = () => {
        Toast.show({
          type: 'error',
          text1: 'Ongelma käyttäjän luomisessa !',
          text2: 'Kokeile uudelleen',
          position: 'top',
          visibilityTime: 4000,
        });
      }

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, sposti, salasana);
            successToast();
            navigation.replace('Sisäänkirjautuminen');
        } catch (error) {
            denyToast();
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
          <Button title="Rekisteröidy" onPress={handleSignUp} color="#D9A084" />
        </View>
      );
    }
    
    const tyylit = StyleSheet.create({
      kontti: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4EAE1',
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

