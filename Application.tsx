import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Application = () => {
  return [
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Image from URI</Text>
      <Image
        style={styles.img1}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKOOpLy92UjzQxq8NCxgxOQJbj_YVdfHO_g&s',
        }}
      />
      <Text style={styles.subTitle}>Image from Directory</Text>
      <Image style={styles.img2} source={require('./Logo/tiny_logo.png')} />
    </ScrollView>,
  ];
};

export default Application;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'black',
    padding: 30,
    margin: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'yellow',
    textAlign: 'center',
    margin: 20,
    lineHeight: 55,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 20,
    marginBottom: 20,
  },
  img1: {
    height: 200,
    width: 200,
    margin: 20,
    borderRadius: 25,
  },
  img2: {
    margin: 20,
    height: 200,
    width: 200,
  },
  img3: {
    margin: 20,
    height: 100,
    width: 350,
    objectFit: 'contain',
  },
  input: {
    borderColor: 'black',
    borderWidth: 3,
    marginHorizontal: 20,
    fontSize: 30,
    borderRadius: 10,
    padding: 15,
    margin: 15,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 20,
    padding: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
