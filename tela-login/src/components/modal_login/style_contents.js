import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    textoUs:{
        
        fontSize:20,
        color:"#ffd700",
        margin:12,
        paddingTop:29,
        paddingRight:0,
        alignSelf:'center',

    },
    textoPs:{
        fontSize:20,
        color:"#ffd700",
        margin:12,
        paddingTop:0,
        paddingRight:1,
        alignSelf:'center',

    },
    
    campoTexto:{
        flex:1,
        alignSelf:'center',
        color:'#d4d3f5',
        fontSize:15,
        borderBottomWidth:1,
        paddingTop:12,
        height: 40,
        margin:18,
        width:210,
        
        
    },
    btLogar:{
        
        flex:1,
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:25,
        padding:14,
        paddingBottom:15,
        margin:40,
        marginTop:15,
        width:'190%',
        alignSelf:'center',
        alignItems: "center",
        justifyContent:'center'
    },
    
    btRegistrar:{
        flex:1,
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:25,
        padding:14,
        paddingBottom:15,
        margin:40,
        marginTop:5,
        width:'190%',
        alignSelf:'center',
        alignItems: "center",
        justifyContent:'center'
        
        
    },
    txtButton:{
    }
})

export default styles