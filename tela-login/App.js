import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar,Image, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

//modulos
import Modalogin from './src/components/modal_login/modal_login';
import Home from './src/components/home_teste/index_home';



export default function App() {


  return ( 
    <View >
      <Home/>
      
      <Modalogin/>

    </View>
  );
}