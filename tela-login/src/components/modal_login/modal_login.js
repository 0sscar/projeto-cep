import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Módulos
import Titulo from '../title/index_title';
import styles from './style_contents';

const SECRET_KEY = 'chave_secreta'; // Chave secreta para criptografia


export default function Modalogin() {
  // UseState para validação
  const [username, setUsername] = useState('');
  const [password, setSenha] = useState('');

  // State do modal
  const [modalActive, setModalActive] = useState(true);

  // UseState para storage
  const [storageName, setStname] = useState('');
  const [storageSenha, setSTsenha] = useState('');

  // Função para criptografar
  const criptografar = (texto) => {
    const criptado = CryptoJS.AES.encrypt(texto, SECRET_KEY).toString();
    console.log("Senha criptografada")
    return criptado;
  };

 // const senhaCript = criptografar(senha);

  // Função para descriptografar
  const descriptografar = (textoCriptografado) => {
    const bytes = CryptoJS.AES.decrypt(textoCriptografado, SECRET_KEY);
    const decriptado = bytes.toString(CryptoJS.enc.Utf8);
    return decriptado;
  };

  //const senhaDescript = descriptografar(senhaCript)


  // Função para salvar no AsyncStorage
  const salvar = async (chave, valor) => {
    try {
      await AsyncStorage.setItem(chave, valor);
      
    } catch (e) {
      alert('Erro ao salvar no AsyncStorage:', e);
    }
  };

  // Função para buscar do AsyncStorage
  const buscar = async (chave) => {
    try {
      const valor = await AsyncStorage.getItem(chave);
      
      return valor;
    } catch (e) {
      alert('Erro ao buscar do AsyncStorage:', e);
    }
  };

  // Função para verificar login
  const verifyLogin = async (username, password) => {
    
  const testename = await buscar('SaveName');
  const testesenha = await buscar('SaveSenha');

    if (username === testename && descriptografar(password) === descriptografar(testesenha) ) {
      
      
      console.log("Logado com Sucesso");
      setModalActive(false);
    } 
    else{alert("Login Inválido");}
    
  };
  
  //funçao registrar
  const registrar = async (username, password) => {
  
  salvar('SaveName', username);
  salvar('SaveSenha', password);
    };

  return (
    <View style={main.container}>
      
      <Text>{storageName}</Text>
      <Text>{storageSenha}</Text>
      
      

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalActive}
      >
        <View style={main.outerView}>
              

          <View style={main.modalView}>
            <Titulo />
            <Text style={styles.subtit}>Bem-vindo(a)</Text>
            <Text style={styles.subtit}>de volta!</Text>

            <Text style={styles.textoUs}>Usuário:</Text>
            <TextInput
              style={styles.campoTexto}
              onChangeText={setUsername}
              value={username}
            />

            <Text style={styles.textoPs}>Senha:</Text>
            <TextInput
              style={styles.campoTexto}
              onChangeText={setSenha}
              value={password}
              secureTextEntry={true}
            />


            <TouchableOpacity
              style={styles.btLogar}
              onPress={() => verifyLogin(username, criptografar(password))}
            >
              <Text style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btLogar}
              onPress={() => registrar(username, criptografar(password))}
            >
              <Text style={styles.txtButton}>registrar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#0776a6',
    borderRadius: 20,
    padding: 90,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 480,
  },
});
