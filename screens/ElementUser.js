import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveUser } from '../store/action';
import styles from './styles';

export default function ElementUser(props) {
  const dispatch = useDispatch()
  const saveuser = () => {
    let user = {
      id: props.id,
      first_name: props.first_name,
      last_name: props.last_name,
      email: props.email,
      avatar: props.avatar,
    };
    dispatch(saveUser(user));
    props.navigation.navigate('User')
  }
  return (
    <TouchableOpacity style={styles.elementUser} onPress={saveuser}>
      <Text>{props.first_name}</Text>
      <Text>{props.last_name}</Text>
      <Text>{props.email}</Text>
    </TouchableOpacity>
  );
}

