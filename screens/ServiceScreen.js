import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { app, auth } from '../firebase/config';
import { getDatabase, ref, onValue } from 'firebase/database';

const db = getDatabase(app);

const ADMIN_UID = '14xCcLTqpoV2dGVz9ZrSfOr6P5U2';

export default function ServiceScreen({ navigation }) {
  const currentUser = auth.currentUser;
  const isAdmin = currentUser.uid === ADMIN_UID;

  const [palvelut, setPalvelut] = useState([]);

  useEffect(() => {
    const palvelutRef = ref(db, 'kohde/');
    onValue(palvelutRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPalvelut(Object.values(data));
      } else {
        setPalvelut([]);
      }
    });
  }, []);

  return (
    <View style={tyylit.kontti}>
      <View style={tyylit.ylaosa}>
      <Text style={tyylit.otsikko}>Palvelut</Text>
      {isAdmin &&(
        <Button style={tyylit.painike}
          title="Lisää palvelu"
          color="#D9A084"
          onPress={() => navigation.navigate('Lisää palvelu')}/>
        )}
      </View>
      <FlatList
        renderItem={({ item }) =>
          <View style={tyylit.kohde}>
            <Text style={tyylit.nimi}>{item.nimi}</Text>
            <Text style={tyylit.hinta}>alk. {item.hinta} €</Text>
          </View>} 
          data={palvelut} />
    </View>
  );
}

const tyylit = StyleSheet.create({
  kontti: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F4EAE1',
  },
  ylaosa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },
  otsikko: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  painike: {
    fontSize: 10,
    width: 80,
  },
  kohde: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#F5F2E",
    borderRadius: 20,
    marginTop: 10,
  },
  nimi: {
    fontSize: 20,
    fontWeight: '400',
  },
  hinta: {
    fontSize: 16,
    color: '#5C4033',
  },
  
});