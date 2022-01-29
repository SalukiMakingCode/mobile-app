import {Image, Text, View} from 'react-native';
import React from "react";
import styles from "../assets/css/Footer";

export default function Footer(props : any) {

    if (props.version=="home") return (
        <View style={styles.footer}>
            <View>
                <Text>Cashback</Text>
                <Image
                    source={require('../assets/img/cashback.png')}
                    style={styles.imageFooter}
                />
            </View>
            <View>
                <Text>Bons plans</Text>
                <Image
                    source={require('../assets/img/bonsplan.png')}
                    style={styles.imageFooter}
                />
            </View>
            <View>
                <Text>Marketplace</Text>
                <Image
                    source={require('../assets/img/marketplace.png')}
                    style={styles.imageFooter}
                />
            </View>
        </View>
    );

    else return (
        <Text/>
    );
}