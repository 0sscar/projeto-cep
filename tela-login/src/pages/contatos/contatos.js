import { View, StyleSheet, text,Button } from "react-native";

export function Contatos(props){
    return(
        <View>
                <Button title='Home' onPress={()=> props.navigation.navigate('home')}/>
        </View>
    )
}