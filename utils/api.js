import { AsyncStorage } from 'react-native'

const storeKey = "@questions-flash-cards-key";


export function getAllEntries() {
    return AsyncStorage.getItem(storeKey)
        .then((results) => {
            const data = JSON.parse(results);
            return data;
        })
}
export function getEntry(item) {
    return AsyncStorage.getItem(storeKey)
        .then((results) => {
            const data = JSON.parse(results);
            return data[item];
        })
}
export function submitDeck(key){
    const deck = initializeDeck(key);
    return submitDeckHandler(key,deck);
}
export function initializeDeck(key) {
    return {
        title: key,
        questions: []
    }
}
function submitDeckHandler (key, deck) {
    return AsyncStorage.mergeItem(storeKey, JSON.stringify({
        [key]: deck
    }))
}

export function submitQuestion (question,answer,deck) {
    return AsyncStorage.getItem(storeKey)
        .then((results) => {
            const data = JSON.parse(results);
            const newData = {...data, deck:{
                ...data[deck], questions: data[deck].questions.concat({question,answer})
                }};
            AsyncStorage.setItem(storeKey, JSON.stringify(newData))
        })
}

export function removeDeck (key) {
    return AsyncStorage.getItem(storeKey)
        .then((results) => {
            const data = JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(storeKey, JSON.stringify(data))
        })
}

export function initializeData(){
    return  (submitDeckHandler("React",
        {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        }).then(r => submitDeckHandler('JavaScript',{
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    })).then( r => submitDeckHandler('Redux',{
        title: 'Redux',
        questions: []
    })));

}
