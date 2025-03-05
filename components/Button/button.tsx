import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Button = ({label, color = 'orange', imageSource}) => {
  return (
    <View>
      <TouchableOpacity style={stylesB.button(color)}>
        <Image style={styles.logo} source={imageSource} />
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesB = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    width: 350,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  }),
});

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 16,
    fontWeight: 700,
  },
  logo: {
    width: 40,
    height: 35,
    position: 'absolute',
    left: 20,
    bottom: 12,
    objectFit: 'contain',
  },
});

export default Button;
