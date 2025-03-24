import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RestAPI = () => {
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

export default RestAPI;

const styles = StyleSheet.create({});
