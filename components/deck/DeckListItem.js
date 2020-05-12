import {Alert, View, StyleSheet, Platform, TouchableOpacity, FlatList, Text, Button, TextInput} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
import { useNavigation } from '@react-navigation/native';
import {connect} from "react-redux";

// takes Deck
class DeckListItem extends Component {
    state = {
        ready: false,
    };
    componentDidMount() {

        this.setState({ready: true});
    }
    handleGoToDeck = () => {
        const {navigation,deck} = this.props;
        navigation.navigate('Deck', {
            deck: deck
        });
    };
    render() {
        if (!this.state.ready) return <Text>Loading</Text>;
        const deckTitle = this.props.deck;
        this.deckItem = this.props.decks[deckTitle];
        const {title, questions} = this.deckItem;
        const count = questions.length;
        const cardWord = count === 1 ? "Card" : "Cards";
        return (
            <TouchableOpacity onPress={this.handleGoToDeck}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count} {cardWord}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 8,
        color: COLORS.darkblue,
    },
    count: {
        fontSize: 15,
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
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default  connect(mapStateToProps,)(DeckListItem);
