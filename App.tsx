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
    state = {
        ready:true
    };
    componentDidMount(): void {
        //initializeData().then(r => this.setState({ready:true}));
    }

    render(){
      return (
          <Provider store={createStore(reducer)} >
              {this.state.ready &&  <TabNavigator/>}
              {!this.state.ready &&  <Text>Loading</Text>}
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
