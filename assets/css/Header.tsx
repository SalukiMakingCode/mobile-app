import {StyleSheet} from "react-native";

const styles  = StyleSheet.create({
    header: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position:"absolute",
        top:0,
        height:150,
        width:'100%'
    },
    logo: {
        width:187,
        height:115,
        marginTop:40,
        marginLeft:25,
        marginRight:25
    },
    logoSmall: {
        width:140,
        height:86,
        marginTop:40,
        marginLeft:10,
        marginRight:10
    },
    burger: {
        width:55,
        height:63,
        marginTop:30,
    },
    profil: {
        width:55,
        height:63,
        marginTop:30,
    }
})

export default styles;