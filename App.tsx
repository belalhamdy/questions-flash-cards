import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-ignore
import TabNavigator from './components/Navigators'
import DeckView from './components/deck/DeckView'
import QuizView from './components/QuizView'
import AddQuestion from './components/deck/AddQuestion'
import AddDeck from './components/deck/AddDeck'

import DecksList from './components/deck/DecksList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import {initializeData} from "./utils/api";
export default class App extends React.Component{
    componentDidMount(): void {
        initializeData()
    }

    render(){
      return (
          <Provider store={createStore(reducer)}>
                  <TabNavigator/>
          </Provider>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
