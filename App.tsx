import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import DeckView from './components/deck/DeckView'
// @ts-ignore
import AddQuestion from './components/deck/AddQuestion'
// @ts-ignore
import AddDeck from './components/deck/AddDeck'

export default function App() {
  return (
      // TODO Test Add deck and test again deck view
   <AddDeck/>
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
