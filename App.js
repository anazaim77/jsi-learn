import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your apps asik!</Text>
      <View style={styles.boxWebview}>
        <Text>asik</Text>
        <WebView
          style={styles.webView}
          source={{ uri: 'http://jsi.fajaryae.my.id' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxWebview: {
    backgroundColor: 'blue',
    flex: 1
  },
  webView: {
    flex: 1
  }
});
