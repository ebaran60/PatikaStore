import {Dimensions, StyleSheet  } from "react-native";

const styles =StyleSheet.create({
    container:{
        backgroundColor:"#efefef",
        borderRadius: 5,
        padding:10,
        margin:5, 
        flex:1,   
    },
    body:{
         
        flex:1
    },
    
    image:{
        
        height:Dimensions.get("window").height/4,
        borderRadius: 5,
        width: '100%',
        resizeMode: 'contain'

       
    },
    
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginTop: 5

    },
    price:{
        fontWeight:"bold",
        fontSize:20,
        color:"#696969",
        marginTop: 5
        
    },

    stock:{
        fontWeight:"bold",
        fontSize:20,
        color:"red",
        marginTop:3,
        
    },
   

});


export default styles;