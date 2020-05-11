import {
    Alert,
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    FlatList,
    Text,
    Button,
    TextInput,
    ScrollView
} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
import DeckListItem from "./DeckListItem";


const decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};

// takes all decks
class DecksList extends Component {
    render() {
        // TODO Uncomment below
        //const {decks} = this.props;
        return (
            <ScrollView style = {styles.container}>
                {Object.keys(decks).map((deck) => {
                    return <View key = {deck}><DeckListItem key = {deck} deck = {decks[deck]} navigation = {this.props.navigation}/><View style={styles.separator}/>
                    </View>;
                })}
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 8,
        color: COLORS.darkblue,
    },
    count: {
        fontSize: 10,
        textAlign: 'center',
        marginVertical: 8,
        color: COLORS.darkgrey,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: COLORS.darkblue,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default DecksList;
