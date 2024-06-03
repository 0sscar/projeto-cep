import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sjcl from 'sjcl';
import * as Animatable from 'react-native-animatable';
import { useAuth } from './AuthContext';

// Módulo style dos componentes
import styles from './style_contents';
////////

const SECRET_KEY = 'chave_secreta'; // Chave secreta para criptografia

export default function Modalogin({ navigation }) {
  // UseState para validação
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setIsAuthenticated } = useAuth();

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

  // Função para salvar o momento de login
  const saveLoginTime = async (loginArray) => {
    const now = Date.now().toString();
    try {
      await AsyncStorage.setItem('lastLoginTime', now);
      await AsyncStorage.setItem('username', loginArray[0]);
      await AsyncStorage.setItem('password', loginArray[1]);
    } catch (error) {
      console.error('Error saving login time', error);
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
        await saveLoginTime([username, password]);
        setIsAuthenticated(true);
        navigation.replace('Home');
      } else {
        alert("Login Inválido. Registre-se");
      }
    } else {
      alert("Usuário não encontrado. Registre-se");
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
  };

  return (
    <View style={main.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
      >
        <View style={main.outerView}>
          <Animatable.View 
            animation='fadeInDown'
            style={styles.viewTitulo}
          >
            <Text style={styles.titulo}>Bem-vindo(a) de volta !</Text>
            <Text style={styles.subTit}>Faça login ou cadastre-se </Text>
            
            <Animatable.View 
              delay={200}
              animation='fadeInUp'
              style={styles.viewForm}
            >
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

              <TouchableOpacity onPress={() => registrar(username, password)}>
                <Text style={styles.txtRegistrar}>Registrar-se</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btLogar}
                onPress={() => verifyLogin(username, password)}
              >
                <Text style={styles.txtButtonEntrar}>Entrar</Text>
              </TouchableOpacity>
            </Animatable.View>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  outerView: {
    backgroundColor: '#3A8592',
    flex: 1,
  },
  modalView: {
    backgroundColor: '#0776a6',
    borderRadius: 20,
    padding: 90,
    width: 300,
    height: 500,
  },
});
