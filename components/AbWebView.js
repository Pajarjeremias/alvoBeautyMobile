import { WebView } from 'react-native-webview';

const AbWebView = () => {
  return (
      <WebView source={{ uri: 'https://timma.fi/yritys/alvo-beauty' }} style={{ flex: 1}} />
  );
};

export default AbWebView;
