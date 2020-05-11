export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const DELETE_DECK = "DELETE_DECK";
export const GET_DECK = "GET_DECK";
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

export function getDeck(deckKey) {
    return {
        type: GET_DECK,
        deckKey,
    }
}

export function addQuestion(deckKey,question,answer) {
    return {
        type: ADD_QUESTION,
        deckKey,question: {
            question,answer
        },
    }
}
