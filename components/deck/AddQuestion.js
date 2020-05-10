import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button, TextInput} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";

// takes the title of deck only
class AddQuestion extends Component {
    state = {
        buttonDisable: true,
        question: '',
        answer: '',
    };
    handleAddQuestion = () => {
        // TODO handle add question
    };
    onChangeText = (text, type) => {
        if (type === "q") {
            this.setState({question: text}, () => {
                this.setState({buttonDisable: (this.state.question === "" || this.state.answer === "")})
            });
        }
        else if (type === "a") {
            this.setState({answer: text}, () => {
                this.setState({buttonDisable: (this.state.question === "" || this.state.answer === "")})
            });
        }
    };


    render() {
        // TODO Uncomment below
        //const {title} = this.props;
        const title = "Deck";

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add to {title}</Text>
                <View style={styles.separator}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text, "q")}
                    placeholder={"Question"}
                />
                <View style={styles.separator}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text, "a")}
                    placeholder={"Answer"}
                />

                <View style={styles.separator}/>
                <TouchableOpacity disabled={this.state.buttonDisable}
                                  style={this.state.buttonDisable ? styles.disabledQuestion : styles.addQuestion}>
                    <Text style={styles.buttonText}>Add Question</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: COLORS.grey,
        borderWidth: 1
    },
    disabledQuestion: {
        backgroundColor: COLORS.grayGreen,
        padding: 10,
        alignItems: "center",
    },
    addQuestion: {
        backgroundColor: COLORS.green,
        padding: 10,
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.white,
    },
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
    separator: {
        marginVertical: 8,
        borderBottomColor: COLORS.darkblue,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default AddQuestion;
