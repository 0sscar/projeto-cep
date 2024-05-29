import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modalogin from './src/components/modal_login/modal_login';

const App = () => {
  return (
    <View style={styles.container}>
      <Modalogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
