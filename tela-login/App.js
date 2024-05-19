import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar} from 'react-native';
import Titulo from './src/components/title/index_title';
import AreaLogin from './src/components/content/index_content';
import { useState } from 'react';

export default function App() {

  const [modalActive, setModalActive] = useState(true)
  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalActive}>
        
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Titulo/>
            <AreaLogin/>


          </View>


        </View>
      </Modal>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#add8e6'
  },
  modalView:{
    backgroundColor:"#fff", //cor final"#0000FF"
    borderRadius: 20,
    padding: 90,
    alignItems: 'center',
    justifyContent:'center',
    width: 250,
    height: 320,

  }
});
