import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import styles from "./assets/css/style";

export default function App() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    return (
    <View style={styles.container}>
      <Image
          source={require('./assets/img/logo.png')}
          style={{width:250, height:154}}
      />
      <View>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}/>
      </View>
      <View>
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
          style={styles.input}/>
      </View>
        <StatusBar style="auto" />
    </View>
  );
}