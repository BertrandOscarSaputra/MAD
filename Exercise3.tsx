import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return [
    <View style={styles.main}>
      <Text style={styles.heading}>Welcome</Text>

      <Text style={styles.inputText}>Username</Text>
      <TextInput style={styles.input} placeholder="Masukkan username anda" />
      <Text style={styles.inputText}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan password anda"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>,
  ];
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  inputText: {
    fontSize: 25,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 5,
  },
  main: {
    padding: 30,
  },
  input: {
    width: 350,
    height: 70,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 10,
    padding: 20,
    fontSize: 17,
  },
  button: {
    backgroundColor: 'orange',
    width: 350,
    height: 60,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    fontWeight: 500,
  },
});

export default Exercise3;
