import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const AbWebView = () => {
  return (
    <View style={tyylit.kontti}>
      <WebView source={{ uri: 'https://timma.fi/yritys/alvo-beauty' }} />
    </View>
  );
};
const tyylit = StyleSheet.create({
    kontti: {
      flex: 1,
    },
  });

export default AbWebView;
