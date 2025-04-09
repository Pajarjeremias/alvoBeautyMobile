import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Palvelut</Text>
      <Text>Tuotesivu tehdään kun ehditään</Text>
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
    fontSize: 24,
    marginBottom: 16,
  },
});