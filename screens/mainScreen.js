import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AbLocation from '../components/AbLocation';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import Toast from 'react-native-toast-message';

export default function MainScreen({ navigation}) {

  const successToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Ulos kirjautuminen onnistui !',
        text2: 'Kiitos kun kävit, nähdään taas <3',
        position: 'top',
        visibilityTime: 4500,
      });
    }
    const denyToast = () => {
      Toast.show({
        type: 'error',
        text1: 'Ongelma ulos kirjautumisessa !',
        text2: 'Kokeile uudelleen',
        position: 'top',
        visibilityTime: 4500,
      });
    }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      successToast();
      navigation.replace('Sisäänkirjautuminen');
    } catch (error) {
      denyToast();
    }
  };

  return (
    <View style={tyylit.kontti}>
      <View style={tyylit.header}>
      <View style={tyylit.uloskirjautuminen}>
        <Button title="Kirjaudu ulos" onPress={handleSignOut} color="#A52A2A" />
      </View>
      <View style={tyylit.meistä}>
        <Button
        title='Tietoa meistä'
        color="#5C4033"
        onPress={() => navigation.navigate('Meistä')} />
      </View>
      </View>
      <Text style={tyylit.otsikko}>Tervetuloa AlvoBeautyn mobiili -sovellukseen!</Text>
      <Text style={tyylit.teksti}>
        Alta löydät Alvo Beautyn palvelut sekä ajanvarauksen Timma sovelluksen kautta.
      </Text>
      <View style={tyylit.painikeKontti}>
      <Button
        title="Palveluihin"
        color="#5C4033"
        onPress={() => navigation.navigate('Palvelut')} 
        />
      <Button
        title='Ajanvaraukseen'
        color="#5C4033"
        onPress={() => navigation.navigate('Alvo Beautyn varaus järjestelmä Timma')}
        />
        </View>
    <AbLocation />
    </View>
    
  );
}

const tyylit = StyleSheet.create({
    kontti: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#E6D3B3'
      },
      otsikko: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        width: '100%',
      },
      teksti: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
      },
      painikeKontti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
    });
