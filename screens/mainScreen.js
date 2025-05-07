import { View, Text, Button, StyleSheet } from 'react-native';
import AbLocation from '../components/AbLocation';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import Toast from 'react-native-toast-message';

export default function MainScreen({ navigation }) {

  const successToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Ulos kirjautuminen onnistui !',
        text2: 'Kiitos kun kävit, nähdään taas <3',
        position: 'top',
        visibilityTime: 4000,
      });
    }
    const denyToast = () => {
      Toast.show({
        type: 'error',
        text1: 'Ongelma ulos kirjautumisessa !',
        text2: 'Kokeile uudelleen',
        position: 'top',
        visibilityTime: 4000,
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
      <Text style={tyylit.otsikko}>Tervetuloa AlvoBeautyn mobiili -sovellukseen!</Text>
      <Text style={tyylit.teksti}>
        Alta löydät Alvo Beautyn sijainnin ja vasemmasta yläreunan valikosta muita sovelluksen toimintoja.
      </Text>
    <AbLocation />
    <View style={tyylit.uloskirjautuminen}>
        <Button title="Kirjaudu ulos" onPress={handleSignOut} color="#A52A2A" />
      </View>
    </View>
    
  );
}

const tyylit = StyleSheet.create({
    kontti: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F4EAE1'
      },
      otsikko: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        width: '100%',
      },
      teksti: {
        fontSize: 18,
        textAlign: 'center',
      },
      uloskirjautuminen: {
        alignItems: 'flex-end',
      }
    });
