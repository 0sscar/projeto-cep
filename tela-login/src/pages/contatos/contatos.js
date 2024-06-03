import { View, StyleSheet, Text,Button, Alert } from "react-native";
import { useAuth } from "../../components/modal_login/AuthContext";

export function Contatos(props, {navigation}){

    const { isAuthenticated, checkLoginStatus } = useAuth();

    useEffect(() => {
      const interval = setInterval(() => {
        checkLoginStatus();
        if (!isAuthenticated) {
          navigation.replace('Login');
        }
      }, 10000); // Verifica a cada 10 segundos
  
      return () => clearInterval(interval);
    }, [isAuthenticated]);

    return(
        <View>
            <Alert>Hello text</Alert>
            <Text style={{paddingTop:'20%',fontSize:20,margin:10}}>Estilize a tela de contatos</Text>
            <Text style={{paddingTop:'10%',fontSize:20,margin:16}}>Área da Flatlist </Text>
            <Text style={{paddingTop:'20%',fontSize:20,margin:16}}>Mais conteúdo</Text>
            
            <Button title='Home' onPress={()=> props.navigation.navigate('home')}/>

        </View>
    )
}