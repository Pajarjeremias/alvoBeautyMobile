import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const AbAboutUsWebView = () => {
  return (
    <View style={tyylit.aboutUsKontti}>
      <WebView source={{ uri: 'https://www.alvobeauty.fi/meista' }} />
    </View>
  );
};
const tyylit = StyleSheet.create({
    aboutUsKontti: {
      flex: 1,
    },
  });

export default AbAboutUsWebView;