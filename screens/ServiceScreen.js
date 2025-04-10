import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Palvelut</Text>
      <Text style={styles.text}>This site is under construction...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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