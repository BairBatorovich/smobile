import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  elementUser: {
    width: WIDTH - 60,
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  listUsers: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  user: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default styles;