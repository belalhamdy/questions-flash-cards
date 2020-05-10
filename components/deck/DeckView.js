import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
// takes the deck
class DeckView extends Component {
    handleAddQuestion = () => {
        // TODO handle add question
    };
    handleStartQuiz = () => {
        // TODO handle start quiz
    };
    handleDeleteDeck = () => {
        // TODO Delete Deck
    };

    render() {
        // TODO Uncomment below
        /*const {title,questions} = this.props.deck;
        const count =  questions.length;*/
        const title = "Deck";
        const count = 5;

        const questionsWord = count === 1 ? "Question" : "Questions";
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count + " " + questionsWord} </Text>

                <TouchableOpacity onPress={this.handleAddQuestion} style={styles.add}>
                    <Text style={styles.buttonText}>Add Question</Text>
                </TouchableOpacity>

                <View style={styles.separator}/>

                <TouchableOpacity onPress={this.handleStartQuiz} style={styles.start}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>

                <View style={styles.separator}/>

                <TouchableOpacity onPress={this.handleDeleteDeck} style={styles.delete}>
                    <Text style={styles.deleteText}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        padding: 50,
    },

    title: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 8,
        color: COLORS.darkblue,

    },
    count: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: COLORS.darkblue,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    add:{
        backgroundColor: COLORS.blue,
        padding: 10,
        alignItems: "center",
    },
    delete:{
        padding: 10,
        alignItems: "center",
    },
    start:{
        backgroundColor: COLORS.green,
        padding: 10,
        alignItems: "center",
    },
    buttonText:{
        color: COLORS.white,
    },
    deleteText:{
        color: COLORS.red,
    },
});
export default DeckView;
