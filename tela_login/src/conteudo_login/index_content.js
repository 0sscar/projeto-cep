import React from 'react';
import {useState} from "react"
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';



export default function CaixaLogin() {
    return(
        <View >
            <Text >Usuário :</Text>
            <TextInput></TextInput>
            <Text>Senha :</Text>
            <TextInput></TextInput>
            <Button>Enviar</Button>


        </View>
    )

    }