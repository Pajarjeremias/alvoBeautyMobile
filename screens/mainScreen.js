import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tervetuloa AlvoBeautyn mobiili -sovellukseen!</Text>
      <Text style={styles.text}>
        Täältä löydät asiantuntevan kauneudenhoitoalan henkilökunnan.
      </Text>
      <Text style={styles.text}>
        Siirry alla olevasta painikkeesta palveluihin ja tutki löytyykö juuri sinulle olevia tarjouksia.
      </Text>
      <Button
        title="Siirry palveluihin"
        color="#5C4033"
        onPress={() => navigation.navigate('Palvelut')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        backgroundColor: '#E6D3B3'
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
      },
      text: {
        fontSize: 15,
        marginBottom: 50,
        textAlign: 'center',
},
});
