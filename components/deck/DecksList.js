import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {Component} from "react";
import * as Constants from "expo-constants";
import COLORS from "../../utils/COLORS";
import DeckListItem from "./DeckListItem";
import {connect} from 'react-redux'
import {AppLoading} from 'expo'
import {getAllEntries} from "../../utils/api";
import {receiveDecks} from "../../actions";


// takes all decks
class DecksList extends Component {
    state = {
        ready: false,
    };

    componentDidMount() {
        const {dispatch} = this.props;

        getAllEntries().then((decks) => dispatch(receiveDecks(decks))).then(() => this.setState(() => ({ready: true})))

    }
    handleGoToAdd = () => {
        this.props.navigation.navigate('Add')
    };
    render() {
        const {decks} = this.props;
        if (!this.state.ready) return <AppLoading/>;
        if (Object.keys(decks).length === 0) return (<TouchableOpacity style={styles.noDecks} keyboardShouldPersistTaps={'handled'} onPress={this.handleGoToAdd}>
           <Text style={styles.noDecks}> No Decks touch here to add</Text>
        </TouchableOpacity>);
        return (
                <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
                    {Object.keys(decks).map((deck) => {
                        return <View key={deck}><DeckListItem key={deck} deck={deck}
                                                              navigation={this.props.navigation}/><View
                            style={styles.separator}/>
                        </View>;
                    })}
                </ScrollView>
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
    noDecks: {
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps,)(DecksList)
