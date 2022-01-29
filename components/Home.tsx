import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, Linking, TouchableOpacity} from 'react-native';
import React from "react";
import styles from "../assets/css/Home";
import Header from "./Header";
import QRCode from 'react-native-qrcode-svg';
import Footer from "./Footer";

export default function Home() {
    let logoFromFile = require('../assets/img/logo.png');
    return (
        <View style={styles.container}>
            <View style={styles.header}/><Header version="burger"/>
            <View style={styles.center}>
                <Text style={styles.welcome}>
                Bienvenue
                </Text>
                <Text style={styles.welcomeName}>
                    VARprénom
                </Text>
            </View>
            <QRCode
                value="5111"
                logo={logoFromFile}
            />
            <Text>Membre ID : VAR5111</Text>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://odoo.b-a-o.be/blog/actus-1')}}>
                <Image
                    source={require('../assets/img/news.png')}
                    style={styles.news}
                />
            </TouchableOpacity>
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <Footer version="home"/>
            </View>
        </View>
    );
}