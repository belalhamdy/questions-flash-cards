import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-ignore
import TabNavigator from './components/Navigators'
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
      <TabNavigator/>
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
