import {RECEIVE_DECKS, ADD_QUESTION, DELETE_DECK, ADD_DECK} from "../actions";

function entries(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {...state,...action.decks};
        case ADD_QUESTION:
        return {...state, [action.deckKey]:{
                ...state[action.deckKey], questions: state[action.deckKey].questions.concat(action.question)
            }};
        case ADD_DECK:
            return{
              ...state, [action.deckKey]: action.deck,
            };
        case DELETE_DECK:
            let newState = state;
            newState[action.deckKey] = undefined;
            delete newState[action.deckKey];
            return {
                ...newState
            };
    }
}

export default entries
