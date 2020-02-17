import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

export default function User(props) {
  const user = useSelector(state => state.reducer.user);
  return (
    <View style={styles.user}>
      <Image source={{ uri: user.avatar }} style={{width: 200, height: 200}}/>
      <Text>{user.id}</Text>
      <Text>{user.first_name}</Text>
      <Text>{user.last_name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

