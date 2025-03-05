import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Input = ({label, placeholder, secureTextEntry}) => {
  return [
    <View>
      <Text style={styles.inputText}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
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
    marginTop: 15,
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
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 16,
    fontWeight: 500,
  },
});

export default Input;
