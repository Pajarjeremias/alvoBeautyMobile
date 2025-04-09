import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tervetuloa AlvoBeautyn sovellukseen!</Text>
      <Text style={styles.text}>
        Täältä löydät palvelut ja tarjoukset.
      </Text>
      <Button
        title="Siirry palveluihin"
        onPress={() => navigation.navigate('Palvelut')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
      },
      text: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
},
});
