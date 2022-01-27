import { StatusBar } from 'expo-status-bar';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import styles from "./assets/css/style";

export default function App() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    return (
    <View style={styles.container}>
      <Image
          source={require('./assets/img/logo.png')}
          style={styles.logo}
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
          <Pressable style={styles.forgotPasswordButton} onPress={() => alert('mot de passe oublié')} >
              <Text style={styles.forgotPasswordButtonText}>Mot de passe oublié</Text>
          </Pressable>
      </View>

      <View>
          <Text>Se souvenir de moi</Text>
      </View>

        <Pressable style={styles.loginButton} onPress={() => alert('log me')}>
            <Text style={styles.loginButtonText}>Entrer</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}