import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
import {submitDeck} from "../../utils/api";
import {connect} from "react-redux";
import {addDeck} from "../../actions";

// takes nothing
class AddDeck extends Component {
    state = {
        buttonDisable: true,
        text: '',
    };
    handleAddDeck = () => {
        const {dispatch} = this.props;
        const deck = this.state.text;

        if (deck in this.props.decks) alert("Cannot add this deck another deck with same name exists");

        else {
            submitDeck(deck).then(() => {
                dispatch(addDeck(deck));
                this.setState({text: "", buttonDisable: true});
                this.textInput.clear();
                this.props.navigation.navigate('DecksList')
            })
        }

    };
    onChangeText = (text) => {
        this.setState({text: text, buttonDisable: text === ""})
    };


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add Deck</Text>
                <View style={styles.separator}/>

                <TextInput
                    ref={input => {
                        this.textInput = input
                    }}
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text)}
                    placeholder={"Deck Title"}
                />
                <View style={styles.separator}/>

                <TouchableOpacity disabled={this.state.buttonDisable}
                                  style={this.state.buttonDisable ? styles.disabled : styles.add}
                                  onPress={this.handleAddDeck} keyboardShouldPersistTaps={'handled'}>
                    <Text style={styles.buttonText}>Add Deck</Text>
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
    disabled: {
        backgroundColor: COLORS.grayGreen,
        padding: 10,
        alignItems: "center",
    },
    add: {
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps,)(AddDeck);
