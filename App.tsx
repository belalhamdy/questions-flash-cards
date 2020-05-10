import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import DeckView from './components/deck/DeckView'
// @ts-ignore
import QuizView from './components/QuizView'
// @ts-ignore
import AddQuestion from './components/deck/AddQuestion'
// @ts-ignore
import AddDeck from './components/deck/AddDeck'

// @ts-ignore
import DecksList from './components/deck/DecksList'

export default function App() {
  return (
   <DecksList/>
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
