import {StyleSheet} from "react-native";

const styles  = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f5e7da',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        header:{
            height:155
        },
        input: {
            width: 220,
            height: 40,
            borderWidth: 1,
            padding: 10,
            backgroundColor:"white",
            borderColor:"#d7d7d7",
            borderRadius:5
        },
        forgotPasswordButton: {
            marginLeft:25,
            marginTop:9,
            backgroundColor:"transparent",
            borderColor:"#2c3454",
            borderWidth:1,
            borderRadius:5,
            textAlign:"center",
            padding:12,
            width:160,
        },
        forgotPasswordButtonText: {
            textAlign:"center"
        },
        loginButton: {
            marginBottom:40,
            backgroundColor:"#8fd14f",
            padding:12,
            textAlign:"center",
            borderRadius:30,
            width:120
        },
        loginButtonText: {
            textAlign:"center",
            color:"white",
        },
        label: {
            textAlign: "center",
            color : "#2a3253",
            marginBottom:6,
            fontSize:24,
            fontWeight:"bold"
        }
})

export default styles;