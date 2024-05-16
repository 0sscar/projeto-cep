import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style_contents";

export default function AreaLogin(){
    return(
        <View>
            <Text style = {styles.texto}>Usuário : </Text>

            <TextInput 
            style = {styles.campoTexto}
            placeholder=" vazio"
            ></TextInput>

            <Text style = {styles.texto}>Senha :</Text>

            <TextInput 
            style = {styles.campoTexto}
            placeholder=" preencha"
            ></TextInput>

            <TouchableOpacity style = {styles.btLogar}>
                <Text style = {styles.txtButton}>Enviar</Text>
            </TouchableOpacity>

            

           
        </View>
    );
}