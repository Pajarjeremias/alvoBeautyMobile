import { WebView } from 'react-native-webview';

const AbAboutUsWebView = () => {
  return (
      <WebView source={{ uri: 'https://www.alvobeauty.fi/meista' }} style={{ flex: 1}} />
  );
};

export default AbAboutUsWebView;