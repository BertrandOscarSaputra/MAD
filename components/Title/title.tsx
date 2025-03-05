import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.heading}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
