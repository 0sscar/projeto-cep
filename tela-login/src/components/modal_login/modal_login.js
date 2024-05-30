import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import sjcl from 'sjcl';

// Módulos
import Titulo from '../title/index_title';
import styles from './style_contents';

const SECRET_KEY = 'chave_secreta'; // Chave secreta para criptografia

export default function Modalogin() {
  // UseState para validação
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State do modal
  const [modalActive, setModalActive] = useState(true);

  // State para sumir botão
  const [btnVisible, setVisible] = useState(true);

  // Função para criptografar
  const criptografar = (texto) => {
    return sjcl.encrypt(SECRET_KEY, texto);
  };

  // Função para descriptografar
  const descriptografar = (textoCriptografado) => {
    return sjcl.decrypt(SECRET_KEY, textoCriptografado);
  };

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
    const storedUsername = await buscar('SaveName');
    const storedPassword = await buscar('SaveSenha');

    if (storedUsername && storedPassword) {
      const decryptedStoredPassword = descriptografar(storedPassword);
      if (username === storedUsername && password === decryptedStoredPassword) {
        alert("Logado com Sucesso");
        setModalActive(false);
      } else {
        alert("Login Inválido. Registre-se");
        setVisible(true);
      }
    } else {
      alert("Usuário não encontrado. Registre-se");
      setVisible(true);
    }
  };

  const campoVazio = () => {
    if (!username || !password) {
      alert("Campos faltando");
      return true;
    }
    return false;
  };

  // Função registrar
  const registrar = async (username, password) => {
    if (campoVazio()) return;
    const encryptedPassword = criptografar(password);
    await salvar('SaveName', username);
    await salvar('SaveSenha', encryptedPassword);
    alert('Usuário Cadastrado');
    hideButton();
  };

  // Função para sumir botão
  const hideButton = () => {
    setVisible(false);
  };

  return (
    <View style={main.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalActive}
      >
        <View style={main.outerView}>
          <View style={main.modalView}>
            <Titulo />
            <Text style={styles.textoUs}>Usuário:</Text>
            
            <TextInput
              style={styles.campoTexto}
              onChangeText={setUsername}
              value={username}
            />

            <Text style={styles.textoPs}>Senha:</Text>
            <TextInput
              style={styles.campoTexto}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            {btnVisible && (
              <TouchableOpacity
                style={styles.btRegistrar}
                onPress={() => registrar(username, password)}
              >
                <Text style={styles.txtButton}>Registrar</Text>
              </TouchableOpacity>
            )}

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
    backgroundColor: '#0776a6',
    borderRadius: 20,
    padding: 90,
    
    justifyContent: 'center',
    width: 300,
    height: 500,
  },
});
