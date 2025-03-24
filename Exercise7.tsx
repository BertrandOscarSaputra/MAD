import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './components/userCard/index';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Card
        first="George"
        last="Bluth"
        avatar="https://reqres.in/img/faces/1-image.jpg"
        email="george.bluth@reqres.in"
      />
      <Text>RestAPI Component</Text>
      {users.map(user => {
        return (
          <View>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({});
