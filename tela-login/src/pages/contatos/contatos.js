import { View, StyleSheet, Text,Button } from "react-native";

export function Contatos(props){
    return(
        <View>
            
            <Text style={{paddingTop:'20%',fontSize:20,margin:10}}>Estilize a tela de contatos</Text>
            <Text style={{paddingTop:'10%',fontSize:20,margin:16}}>Área da Flatlist </Text>
            <Text style={{paddingTop:'20%',fontSize:20,margin:16}}>Mais conteúdo</Text>
            
            <Button title='Home' onPress={()=> props.navigation.navigate('home')}/>

        </View>
    )
}