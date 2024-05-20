import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar, TextInput} from 'react-native';
import Titulo from './src/components/title/index_title';
import styles from './src/components/content/style_contents';
import React, { useState } from 'react';


function verifyLogin(username, password,usuario,senha,setModalActive){
  
  if(username == usuario && password == senha){
    setModalActive(false);
  }
  else{alert('Login Inválido')}


}
export default function App() {

  //definindo usuario 
  const usuario = 'joao';
  const senha = '1234';
  
  //useState para validaçao
  const [username, setUsername] = useState('');
  const [password, setSenha] = useState('');

  //state do modal
  const [modalActive, setModalActive] = useState(true)


  return ( 
    <View style={main.container}>
      <Text>0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</Text>
      <Modal

        animationType='fade'
        transparent={true}
        visible={modalActive}>
        
        <View style={main.outerView}>
          <View style={main.modalView}>
            <Titulo/>
            <TextInput
            placeholder="usuario"
            style = {styles.campoTexto}
            onChangeText={setUsername}
            value={username}
            ></TextInput>

           

            <TextInput                        
            placeholder='senha'
            style = {styles.campoTexto}
            onChangeText={setSenha}
            value={password}
            secureTextEntry={(true)}
            ></TextInput>

            <TouchableOpacity
            style={styles.btLogar}
            onPress={()=>verifyLogin(username, password,usuario,senha,setModalActive)}
            ><Text
            style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>

        </View>
        </View>
      </Modal>

     
    </View>
  );
}

const main = StyleSheet.create({
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