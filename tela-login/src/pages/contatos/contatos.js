import React, { useState } from "react";
import { View, StyleSheet, Text,Button, FlatList,Image, Linking, TouchableOpacity} from "react-native";
import styles from "../../components/modal_login/style_contents";

export function Contatos(props){
    const [people, setPeople] = useState([
        { name: 'David', key:'1' },
        { name: 'Oscar', key:'oscargabrieled@gmail.com' },
        { name: 'Thalles', key:'thallesgmkr@gmail.com' },
        { name: 'Brenno', key:'4' }
    ]);

    const handlePress = () => {
        Linking.openURL('https://github.com/0sscar/projeto-cep');
      };
    return(
        <View style={styles.container}>
            
            <Text style={contato.titulo}>Estilize a tela de contatos</Text>
            <Text style={contato.titulo}>Área da Flatlist </Text>

            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>Nome: {item.name}{'\n'}e-mail: {item.key}{'\n'}linkedin:</Text>
                )}
            />

                <View style={contato.viewGit}>
                    <Image 
                    style={contato.octo}
                    source={require('./octocat.png')}/>

                       <TouchableOpacity 
                       onPress={handlePress}
                       style={contato.btnGit}>
                        <Text style={contato.urlGit}>Clique aqui para ver o projeto no GitHub </Text>
                       </TouchableOpacity>
                    
                </View>

            
            <Button title='Home' onPress={()=> props.navigation.navigate('home')}/>

        </View>
    )
}
const contato = StyleSheet.create({
    titulo:{
        fontSize:20,
        alignSelf:'center',
        paddingTop:'12%'
    },
        
    container:{
        alignItems:'center',

    },
    btnGit:{
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1f047a',
        height:40,
        margin:20,
        marginTop:4,
        borderRadius:50,
        elevation:6,
    },
    viewGit:{
        backgroundColor:'#fff',
        elevation:8,
        margin:26,
        borderRadius:20,
    },
    octo:{
        alignSelf:'center',
        justifyContent:'center',
        resizeMode:'contain',
        height:50,
        width:50,
        margin:10,
        marginTop:20,
        
    },
    urlGit:{
        color:'#00bbff',
        textDecorationLine:'underline',
        
    },
});