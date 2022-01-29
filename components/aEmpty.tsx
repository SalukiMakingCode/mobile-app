import { StatusBar } from 'expo-status-bar';
import {Image, Text, View} from 'react-native';
import React from "react";
import styles from "../assets/css/Home";
import Header from "./Header";

export default function AEmpty() {
    return (
        <View style={styles.container}>
            <View style={styles.header}/><Header version="burger"/>

            <StatusBar style="auto" />
        </View>
    );
}