import React from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AbLocation(){
    const targetLocation = {
        latitude: 60.26157860730658,
        longitude: 24.887529968878223,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      };
    const openLocation = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${targetLocation.latitude},${targetLocation.longitude}`;
        Linking.openURL(url);
      };
    
      return (
        <View style={tyylit.kontti}>
          <MapView style={tyylit.kartta} initialRegion={targetLocation}>
            <Marker
              coordinate={targetLocation}
              title="Alvo Beauty"
            />
          </MapView>

          <View style={tyylit.painike}>
            <Button
            title='Tästä reittiohjeisiin'
            onPress={openLocation}
            color="#5C4033"
            />
          </View>
        </View>
      );
    }
    
    const tyylit = StyleSheet.create({
      kontti: {
        height: 350,
        width: '100%',
        marginTop: 25,
      },
      kartta: {
        width: '100%',
        height: '70%',
      },
      painike: {
        marginTop: 10,
      },
    });