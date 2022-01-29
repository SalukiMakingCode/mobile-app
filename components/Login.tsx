import { StatusBar } from 'expo-status-bar';
import {Pressable, Text, TextInput, View} from 'react-native';
import * as React from "react";
import styles from "../assets/css/Login";
import { Link } from "react-router-native";
import Header from "./Header";

export default function Login() {
    const [login, setLogin] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    return (
    <View style={styles.container}>
      <View style={styles.header}/><Header version="alone"/>
      <View>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input} onChangeText={setLogin} value={login}/>
      </View>
      <View>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
            style={styles.input} onChangeText={setPassword} value={password}/>
          <Pressable style={styles.forgotPasswordButton} onPress={() => alert('mot de passe oublié')} >
              <Text style={styles.forgotPasswordButtonText}>Mot de passe oublié</Text>
          </Pressable>
      </View>

          <Pressable style={styles.loginButton} onPress={() => alert('log me')}>
          <Text style={styles.loginButtonText}>Entrer</Text>
          </Pressable>
      <Link to="/home">
          <Text>Shorcut to home</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}