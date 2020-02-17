import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './navigation/navigation';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}