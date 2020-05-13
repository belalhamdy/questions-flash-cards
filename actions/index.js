import {initializeDeck, removeDeck} from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";


export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function deleteDeck(deckKey) {
    return {
        type: DELETE_DECK,
        deckKey,
    }
}
export function addDeck(deckKey){
    return {
        type: ADD_DECK,
        deckKey,
        deck: initializeDeck(deckKey)
    }
}
export function addQuestion(question, answer, deckKey) {
    return {
        type: ADD_QUESTION,
        deckKey, question: {
            question, answer
        },
    }
}

export function handleDeleteDeck(deck) {
    return (dispatch) => {
        return removeDeck(deck).then((deck) => {
            dispatch(deleteDeck(deck));
        })
    }
}
