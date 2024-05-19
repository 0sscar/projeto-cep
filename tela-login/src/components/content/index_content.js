import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style_contents";

export default function AreaLogin(){
    //const [user, setUser] = useState=('');
    //const [senha, setSenha] = useState=('');

    return(
        <View>
            

            <View style ={styles.inputBox}>
                <TextInput 
                style = {styles.campoTexto}
                placeholder=" usuário"
                ></TextInput>
            </View>
            

           

            <View style ={styles.inputBox}>
                <TextInput 
                style = {styles.campoTexto}
                placeholder=" senha"
                secureTextEntry={true}
                ></TextInput>
            </View>
            

            <TouchableOpacity style = {styles.btLogar}>
                <Text style = {styles.txtButton}>Entrar</Text>
            </TouchableOpacity>

            

           
        </View>
    );
}