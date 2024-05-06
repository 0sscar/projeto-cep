import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TitleLog from './src/title_login/index_title';
import CaixaLogin from './src/conteudo_login/index_content';
import styles from "./src/title_login/style_ttlogin"
import styles from './src/conteudo_login/style_content';

export default function App() {
  return (
    <View >
      <View >
        <TitleLog/>
        <CaixaLogin/>
        
        
        
      </View>
    </View>
  );
}

