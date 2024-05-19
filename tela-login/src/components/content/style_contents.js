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
        backgroundColor:'rgba(0,0,255,0.2)',
        color:'#0000FF',
        
        borderBottomColor:"#a5a",
        height: 40,
        margin:20,
        width:180,
        
        
    },
    btLogar:{
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:7,
        padding:14,
        paddingBottom:10,
        margin:40,
        marginTop:27,
        
        width:100,
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