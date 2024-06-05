import React, { useState } from "react";
import { View, StyleSheet, Text,Button, FlatList} from "react-native";
import styles from "../../components/modal_login/style_contents";

export function Contatos(props){
    const [people, setPeople] = useState([
        { name: 'David', key:'1' },
        { name: 'Oscar', key:'2' },
        { name: 'Thalles', key:'3' },
        { name: 'Brenno', key:'4' }
    ]);

    return(
        <View style={styles.container}>
            
            <Text style={{paddingTop:'20%',fontSize:20,margin:10}}>Estilize a tela de contatos</Text>
            <Text style={{paddingTop:'10%',fontSize:20,margin:16}}>Área da Flatlist </Text>

            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>Nome: {item.name}{'\n'}e-mail: {item.key}{'\n'}linkedin:</Text>
                )}
            />

            <Text style={{paddingTop:'20%',fontSize:20,margin:16}}>Mais conteúdo</Text>
            <Button title='Home' onPress={()=> props.navigation.navigate('home')}/>

        </View>
    )
}