import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from './components/Input/index';
import Button from './components/Button/button';
import Title from './components/Title/title';

const SignIn = () => {
  return [
    <View style={styles.main}>
      <Title label="Welcome" />
      <Input
        secureTextEntry={false}
        label="Masukkan Nama"
        placeholder="Masukkan nama"
      />
      <Input
        secureTextEntry={true}
        label="Masukkan Password"
        placeholder="Masukkan password"
      />
      <Button label="Sign In" color="orange" />
      <Button
        label="Sign In with Google"
        color="red"
        imageSource={require('./Logo/google.png')}
      />
      <Button
        label="Sign In with Facebook"
        color="blue"
        imageSource={require('./Logo/facebookkk.png')}
      />
      <Button
        label="Sign In with Apple"
        color="black"
        imageSource={require('./Logo/applee.png')}
      />
    </View>,
  ];
};

const styles = StyleSheet.create({
  main: {
    padding: 30,
  },
});

export default SignIn;
