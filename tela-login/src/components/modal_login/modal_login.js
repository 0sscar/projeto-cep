import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar,Image, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

//modulos
import Titulo from '../title/index_title';
import styles from '../content/style_contents';



function verifyLogin(username, password,usuario,senha,setModalActive){
  
  //username e password = var do usestate
  //usuario e senha = variaveis para login
  if(username == usuario && password == senha){
    setModalActive(false);
  }
  else{alert('Login Inválido')}
 

}
export default function Modalogin() {

  //definindo usuario 
  const usuario = 'joao';
  const senha = '1234';
  
  //useState para validaçao
  const [username, setUsername] = useState('');
  const [password, setSenha] = useState('');
  const [phone, setPhone] = useState('');

  //state do modal
  const [modalActive, setModalActive] = useState(true)


  return ( 
    <View style={main.container}>
      
      <Modal

        animationType='fade'
        transparent={true}
        visible={modalActive}>
        
        <View style={main.outerView}>
          <View style={main.modalView}>
            <Titulo/>
            <Text
            
            style={styles.subtit}>Bem-vindo(a)</Text>

            <Text
            style={styles.subtit}>de volta!</Text>
            
            
            <Text 
            style ={styles.textoUs}>Usuário:</Text>
            <TextInput
            //placeholder="usuario"
            style = {styles.campoTexto}
            onChangeText={setUsername}
            value={username}
            ></TextInput>

            <Text
            style={styles.textoPs}>Senha:</Text>           
            <TextInput                        
            //placeholder='senha'
            style = {styles.campoTexto}
            onChangeText={setSenha}
            value={password}
            secureTextEntry={(true)}
            ></TextInput>

            <Text
            style={styles.textoTl}>Telefone:</Text>
            <TextInput
            style={styles.campoTexto}
            //placeholder='.+12 (34)56789-0123'
            onChangeText={setPhone}></TextInput>
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
    backgroundColor:'#2a48f5', //'rgba(48, 41, 242,0.7)''#4842f5'
    borderRadius: 20,
    padding: 90,
    alignItems: 'center',
    justifyContent:'center',
    width: 300,
    height: 480,

  }
});