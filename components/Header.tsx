import {Image, Text, View, useWindowDimensions} from 'react-native';
import React from "react";
import styles from "../assets/css/Header";

export default function Header(props : any) {
const window = useWindowDimensions();
    if (props.version=="burger" && window.width<340) return (
        <View style={styles.header}>
            <Image
                source={require('../assets/img/burger.png')}
                style={styles.burger}
            />
            <Image
                source={require('../assets/img/logoSmall.png')}
                style={styles.logoSmall}
            />
            <Image
                source={require('../assets/img/profil.png')}
                style={styles.profil}
            />
        </View>
    );

    if (props.version=="burger" && window.width>=340) return (
        <View style={styles.header}>
            <Image
                source={require('../assets/img/burger.png')}
                style={styles.burger}
            />
            <Image
                source={require('../assets/img/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/img/profil.png')}
                style={styles.profil}
            />
        </View>
    );

    if (props.version=="alone") return (
        <View style={styles.header}>
            {window.width<340 ?
                <Image
                source={require('../assets/img/logoSmall.png')}
                style={styles.logoSmall}
                />
                :
                <Image
                source={require('../assets/img/logo.png')}
                style={styles.logo}
                />
            }
        </View>
    );

    else return (
        <Text>This is not a valid Header version</Text>
    );
}