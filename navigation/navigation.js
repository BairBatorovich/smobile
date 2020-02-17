import * as React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UsersScreen from '../screens/Users';
import UserScreen from '../screens/User';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styleHeader = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold'
    },
    headerBackTitleStyle: {
        color: 'green',
    },
    headerLayoutPreset: 'center'
};

const Stack = createStackNavigator();

MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='Order'>
            <Stack.Screen name="ListUsers" component={UsersScreen} />
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    );
}

export default MyContainer = () => {
    return (
        <NavigationContainer>
           <MyStack/>
        </NavigationContainer>
    );
}