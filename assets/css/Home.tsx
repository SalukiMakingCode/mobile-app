import {StyleSheet} from "react-native";

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5e7da',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:200
    },
    header: {
        height:150
    },
    welcome: {
        color:"#2a3253",
        fontSize:28,
        fontWeight:"bold"
    },
    welcomeName: {
        color:"#2a3253",
        fontSize:28,
        marginTop:5,
        fontWeight:"bold",
    },
    news:{
        height:80,
        width:91,
    },
    center:{
        alignItems:'center'
    }

})

export default styles;