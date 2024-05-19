import { StyleSheet } from "react-native";

import AreaLogin from "./index_content";

const styles = StyleSheet.create({
    inputBox:{
        width:'95%',
        height:20,
        margin:5,
        color: '#a5a'


    },
    texto:{
        fontWeight:"italic",
        fontSize:18,
        color:"#ffd700",
        paddingTop:15,
        paddingRight: 50,
    },
    campoTexto:{
        backgroundColor:" #ffff00",
        borderRadius:"10%",
        height: 250,
        margin:20,
        width:200,
        
        
    },
    btLogar:{
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:7,
        padding:14,
        paddingBottom:10,
        margin:30,
        marginTop:40,
        marginLeft:75,
        width:90,
        alignItems: "center",
        justifyContent:'center'
        
        
    },
    txtButton:{
        fontSize:19,
        color: '#0000FF',
        fontWeight:"bold",
    }
})

export default styles