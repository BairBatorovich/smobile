import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { saveListusers, saveUser } from '../store/action';
import ElementUser from './ElementUser';
import styles from './styles';

export default function Users(props) {
  const users = useSelector(state => state.reducer.users);
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get('https://reqres.in/api/users?page=2').then(res => dispatch(saveListusers(res.data.data)))
  }, [])

  return (
    <View style={styles.listUsers}>
      <Text>Список пользователей</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <ElementUser
          key={item.id}
          id={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          email={item.email}
          avatar={item.avatar}
          navigation={props.navigation}
        />}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}

