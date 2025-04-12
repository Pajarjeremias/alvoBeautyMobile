import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AbLocation from '../components/AbLocation';


export default function MainScreen({ navigation}) {
  return (
    <View style={tyylit.kontti}>
      <Text style={tyylit.otsikko}>Tervetuloa AlvoBeautyn mobiili -sovellukseen!</Text>
      <Text style={tyylit.teksti}>
        Täältä löydät asiantuntevan kauneudenhoitoalan henkilökunnan.
      </Text>
      <Text style={tyylit.teksti}>
        Siirry alla olevasta painikkeesta palveluihin ja tutki löytyykö juuri sinulle sopivaa palvelua.
      </Text>
      <Button style={tyylit.painike}
        title="Siirry palveluihin"
        color="#5C4033"
        onPress={() => navigation.navigate('Palvelut')
        }
      />
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
        textAlign: 'center',
      },
      teksti: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
      },
      painike: {
        marginBottom: 10,
      },
    });
