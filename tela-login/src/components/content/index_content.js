import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style_contents";

export default function AreaLogin(){
   
    //definindo usuario 
    const usuario = 'joaoentregas';
    const senha = 'cep1234';
    
    //useState para validaçao
    const [username, setUsername] = useState('');
    const [password, setSenha] = useState('');

    //funçao verificaçao
    function verifyLogin(){
        if (setUsername == usuario && setSenha == senha){
            
        }

    }
    return(
        <View>            
            <View>
                <TextInput 
                style = {styles.campoTexto}
                placeholder=" usuário"
                onChangeText={text=>setUsername(text)}                
                ></TextInput>
            </View>                       
            <View>
                <TextInput 
                style = {styles.campoTexto}
                placeholder=" senha"
                onChangeText={text=>setSenha(text)}
                secureTextEntry={true}
                ></TextInput>
            </View>                     
            <TouchableOpacity 
                style = {styles.btLogar}
                onPress={verifyLogin()}>                
                <Text style = {styles.txtButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}