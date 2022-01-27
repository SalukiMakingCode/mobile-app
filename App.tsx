import { StatusBar } from 'expo-status-bar';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import React from "react";
import styles from "./assets/css/style";

export default function App() {
    const [login, setLogin] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    return (
    <View style={styles.container}>
      <Image
          source={require('./assets/img/logo.png')}
          style={styles.logo}
      />
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
      <StatusBar style="auto" />
    </View>
  );
}