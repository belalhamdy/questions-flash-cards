import React from 'react';
import {StyleSheet, Text} from 'react-native';
import TabNavigator from './components/Navigators'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {setLocalNotification} from "./utils/notifications";

export default class App extends React.Component{
    state = {
        ready:true
    };
    componentDidMount(): void {
       setLocalNotification();
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
