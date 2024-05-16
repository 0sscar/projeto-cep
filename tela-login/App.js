import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/title/index_title';
import AreaLogin from './src/components/content/index_content';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <AreaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
