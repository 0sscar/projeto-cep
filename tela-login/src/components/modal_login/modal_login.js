import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Módulos
import Titulo from '../title/index_title';
import styles from './style_contents';

const usuario = 'joao';
const senha = '1234';
const SECRET_KEY = 'alignjhurtonebixahdhif'; // Chave secreta para criptografia


export default function Modalogin() {
  // UseState para validação
  const [username, setUsername] = useState('');
  const [password, setSenha] = useState('');
  const [phone, setPhone] = useState('');

  // State do modal
  const [modalActive, setModalActive] = useState(true);

  // UseState para storage
  const [storageName, setStname] = useState('');
  const [storageSenha, setSTsenha] = useState('');
  const [storagePhone, setSTphone] = useState('');

  // Função para criptografar
  const criptografar = (texto) => {
    const criptado = CryptoJS.AES.encrypt(texto, SECRET_KEY).toString();
    console.log("Senha criptografada")
    return criptado;
  };

  const senhaCript = criptografar(senha);

  // Função para descriptografar
  const descriptografar = (textoCriptografado) => {
    const bytes = CryptoJS.AES.decrypt(textoCriptografado, SECRET_KEY);
    const decriptado = bytes.toString(CryptoJS.enc.Utf8);
    console.log("Senha descriptografada");
    return decriptado;
  };

  const senhaDescript = descriptografar(senhaCript)


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
  const verifyLogin = (username, password) => {
    if (username === usuario && password === senha ) {
      setModalActive(false);
      salvar('SaveName', username);
      salvar('SaveSenha', senhaCript);
      salvar('SavePhone', phone);
    } 
    else{alert("Login Inválido");}
    
  };

  // Carregar dados do AsyncStorage ao montar o componente
  useEffect(() => {
    const carregarDados = async () => {
      const nomeSalvo = await buscar('SaveName');
      const senhaSalva = await buscar('SaveSenha');
      const telefoneSalvo = await buscar('SavePhone');

      if (nomeSalvo) setStname(nomeSalvo);
      if (senhaSalva) setSTsenha(senhaSalva);
      if (telefoneSalvo) setSTphone(telefoneSalvo);
    };

    carregarDados();
  }, []);

  return (
    <View style={main.container}>
      <Text>{storageName}</Text>
      <Text>{storageSenha}</Text>
      <Text>{senhaDescript}</Text>
      <Text>{storagePhone}</Text>
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

            <Text style={styles.textoTl}>Telefone:</Text>
            <TextInput
              style={styles.campoTexto}
              onChangeText={setPhone}
              value={phone}
            />

            <TouchableOpacity
              style={styles.btLogar}
              onPress={() => verifyLogin(username, password)}
            >
              <Text style={styles.txtButton}>Entrar</Text>
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
    backgroundColor: '#2a48f5',
    borderRadius: 20,
    padding: 90,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 480,
  },
});
