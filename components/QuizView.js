import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../utils/COLORS";

// takes the deck
class QuizView extends Component {
    componentDidMount() {

    }

    state = {
        currentIndex: 0,
        showAnswer: false,
        correct: 0,
        finish: false,
    };
    handleShowAnswer = () => {
        this.setState({showAnswer: true});
    };
    gotoNextQuestion = () => {
        this.setState({showAnswer: false, currentIndex: this.state.currentIndex + 1}, () =>
        {this.setState({finish: this.state.currentIndex >= this.props.route.params.deck.questions.length})});
    };
    handleCorrect = () => {
        this.setState({correct: this.state.correct + 1}, this.gotoNextQuestion);
    };
    handleNotCorrect = () => {
        this.gotoNextQuestion();
    };
    handleAgain = () => {
        this.setState({correct: 0, showAnswer: false, currentIndex: 0, finish: false})
    };
    handleGoToHome = () => {
        this.props.navigation.navigate('DecksList')
    };
    handleGoToDeck = () => {
        const {navigation} = this.props;
        this.props.navigation.goBack(null);
    };
    render() {


        const {currentIndex, showAnswer, finish, correct} = this.state;

        const {title,questions} = this.props.route.params.deck;
        const length = questions.length;

        if (finish) return (
            <View style={styles.container}>
                <Text>Finish</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>You have solved {correct} questions!!</Text>
                <View style={styles.separator}/>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handleAgain} style={styles.show}>
                        <Text style={styles.buttonText}>Again</Text>
                    </TouchableOpacity>

                    <View style={styles.separator}/>

                    <TouchableOpacity onPress={this.handleGoToDeck} style={styles.show}>
                        <Text style={styles.buttonText}>Go to Deck </Text>
                    </TouchableOpacity>

                    <View style={styles.separator}/>

                    <TouchableOpacity onPress={this.handleGoToHome} style={styles.show}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        let question = "Not Available";
        let answer = "Not Available";
        if (currentIndex < length) {
            const current = questions[currentIndex];
            question = current.question;
            answer = current.answer;
        }

        const questionsWord = length === 1 ? "Question" : "Questions";
        if (length === 0){
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>No Questions in this deck</Text>
                    <View style={styles.separator}/>

                        <TouchableOpacity onPress={this.handleGoToDeck} style={styles.show}>
                            <Text style={styles.buttonText}>Go to Deck </Text>
                        </TouchableOpacity>

                        <View style={styles.separator}/>

                        <TouchableOpacity onPress={this.handleGoToHome} style={styles.show}>
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity>
                    </View>
            )
        }

        else return (
            <View style={styles.container}>
                <Text>Question {currentIndex + 1} out of {length} {questionsWord}</Text>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.separator}/>
                <View style={styles.container}>
                    <Text style={styles.question}>{question}</Text>

                    {showAnswer && <View style={styles.separator}/>}
                    {showAnswer && <Text style={styles.answer}>{answer} </Text>}
                    <View style={styles.separator}/>

                    {!showAnswer && <TouchableOpacity onPress={this.handleShowAnswer} style={styles.show}>
                        <Text style={styles.buttonText}>Show Answer</Text>
                    </TouchableOpacity>}

                    {showAnswer && <View style={styles.separator}/>}

                    {showAnswer && <TouchableOpacity onPress={this.handleCorrect} style={styles.correct}>
                        <Text style={styles.buttonText}>Correct </Text>
                    </TouchableOpacity>}

                    {showAnswer && <View style={styles.separator}/>}

                    {showAnswer && <TouchableOpacity onPress={this.handleNotCorrect} style={styles.unCorrect}>
                        <Text style={styles.buttonText}>Not Correct</Text>
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    allScreen:{
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 0,
        color: COLORS.darkblue,

    },
    answer: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 0,
        color: COLORS.green,

    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 8,
        color: COLORS.darkblue,

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: COLORS.darkblue,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    show: {
        backgroundColor: COLORS.blue,
        padding: 10,
        alignItems: "center",
    },
    correct: {
        backgroundColor: COLORS.green,
        padding: 10,
        alignItems: "center",
    },
    unCorrect: {
        backgroundColor: COLORS.red,
        padding: 10,
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.white,
    },
});
export default QuizView;
