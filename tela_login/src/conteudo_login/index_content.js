import React from 'react';
import {useState} from "react"
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import styles from './style_content';


export default function CaixaLogin() {
    return(
        <View >
            <Text style = {styles.textoNormal}> Usuário :</Text>

            <TextInput 
            style = {styles.campoText}>
                
            </TextInput>

            <Text style = {styles.textoNormal}> Senha :</Text>

            <TextInput 
            style = {styles.campoText}>

            </TextInput>
            
            <Button style = {styles.butonLogar}>Enviar</Button>


        </View>
    )

    }