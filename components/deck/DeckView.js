import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
import {connect} from "react-redux";
import {deleteDeck} from "../../actions";
import {removeDeck} from "../../utils/api";

// takes the deck
class DeckView extends Component {
    state = {
        ready: false,
    };
    componentDidMount() {
        const deckTitle = this.props.route.params.deck;
        this.deck = this.props.decks[deckTitle];
        this.setState({ready: true});
    }

    handleAddQuestion = () => {
        this.props.navigation.navigate('AddQuestion',{
            title: this.props.route.params.deck
        })
    };
    handleStartQuiz = () => {
        this.props.navigation.navigate('Quiz',{
            deck: this.props.route.params.deck
        })
    };
    handleDeleteDeck = () => {
        const {dispatch} = this.props;
        const deck = this.props.route.params.deck;
        removeDeck(deck).then(dispatch(deleteDeck(deck)));
        this.props.navigation.navigate('DecksList')

    };

    render() {
        if (!this.state.ready) return <Text>Loading</Text>;
        const {title,questions} = this.deck;
        const count =  questions.length;

        const questionsWord = count === 1 ? "Question" : "Questions";
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count + " " + questionsWord} </Text>

                <TouchableOpacity onPress={this.handleAddQuestion} style={styles.add}>
                    <Text style={styles.buttonText}>Add Question</Text>
                </TouchableOpacity>

                <View style={styles.separator}/>

                <TouchableOpacity disabled={count === 0}
                    onPress={this.handleStartQuiz} style={count === 0 ? styles.disabledQuestion :styles.start}>
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
    disabledQuestion: {
        backgroundColor: COLORS.grayGreen,
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
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps,)(DeckView);
