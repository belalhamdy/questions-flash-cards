import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import DeckView from './components/deck/DeckView'
// @ts-ignore
import AddQuestion from './components/deck/AddQuestion'

export default function App() {
  return (
   <AddQuestion/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
