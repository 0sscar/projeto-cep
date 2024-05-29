import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    subtit:{
        flex:1,
        color:'#ffd700',
        fontSize:14,
        margin:0,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
       
    },
    
    textoUs:{
        flex:1,
        fontWeight:"italic",
        fontSize:18,
        color:"#ffd700",
        paddingTop:12,
        paddingRight:147,
    },
    textoPs:{
        fontWeight:"italic",
        fontSize:18,
        color:"#ffd700",
        paddingTop:0,
        paddingRight:153,
    },
    
    campoTexto:{
        flex:1,
        color:'#d4d3f5',
        fontSize:20,
        borderBottomWidth:1,
        height: 40,
        margin:18,
        width:210,
        
        
    },
    btLogar:{
        flex:1,
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:10,
        padding:14,
        paddingBottom:15,
        margin:40,
        marginTop:15,
        width:'190%',
        alignItems: "center",
        justifyContent:'center'
    },
    
    btRegistrar:{
        flex:1,
        borderRadius:50,
        backgroundColor:"#ffd700",
        paddingTop:10,
        padding:14,
        paddingBottom:15,
        margin:40,
        marginTop:5,
        width:'190%',
        alignItems: "center",
        justifyContent:'center'
        
        
    },
    txtButton:{
        flex:1,
        fontSize:19,
        color: '#0776a6',
        fontWeight:"bold",
    }
})

export default styles