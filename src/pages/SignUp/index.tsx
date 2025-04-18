import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, AddPhoto} from '../../components/molecules/index';
import {Button, Gap} from '../../components/atoms/index';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <AddPhoto />
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          secureTextEntry={true}
          label="Password"
          placeholder="Type your password"
        />
        <Gap height={24} />
        <Button label="Continue" color="#02cf8e" textColor="#000000" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
