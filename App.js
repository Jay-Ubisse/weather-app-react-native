import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import SearchInput from './components/SearchInput';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Text style={[styles.textStyle, styles.largeText]}>Maputo</Text>
      <Text style={[styles.textStyle, styles.smallText]}>Ceu Nublado</Text>
      <Text style={[styles.textStyle, styles.normalText]}>24° C</Text>
      <SearchInput placeholder="Pesquise qualquer cidade aqui..." />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  normalText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 18,
  },
});
