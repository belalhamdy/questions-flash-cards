import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button, TextInput} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";

// takes nothing
class AddDeck extends Component {
    state = {
        buttonDisable: true,
        text: '',
    };
    handleAddDeck = () => {
        // TODO handle add deck
    };
    onChangeText = (text) => {
        this.setState({text: text, buttonDisable: text === "" })
    };


    render() {

        const title = "Deck";

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add Deck</Text>
                <View style={styles.separator}/>

                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.onChangeText(text)}
                    placeholder={"Deck Title"}
                />
                <View style={styles.separator}/>

                <TouchableOpacity disabled={this.state.buttonDisable}
                                  style={this.state.buttonDisable ? styles.disabled : styles.add}>
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
export default AddDeck;
