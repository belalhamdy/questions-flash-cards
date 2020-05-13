import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import DecksList from "./deck/DecksList";
import DeckView from "./deck/DeckView";
import QuizView from "./QuizView";
import AddQuestion from "./deck/AddQuestion";
import AddDeck from "./deck/AddDeck";

const DeckStack = createStackNavigator();

function DeckStackComponent() {
    return (
        <DeckStack.Navigator
            initialRouteName="DecksList"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <DeckStack.Screen
                name="DecksList"
                component={DecksList}
                options={{
                    title: 'Decks',
                }}
            />
            <DeckStack.Screen
                name="Deck"
                component={DeckView}
            />
            <DeckStack.Screen
                name="Quiz"
                component={QuizView}
                options={{
                    gestureEnabled: true,
                }}
            />
            <DeckStack.Screen
                name="AddQuestion"
                component={AddQuestion}
                options={{
                    gestureEnabled: true,
                }}
            />
        </DeckStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Decks') {
                            iconName = 'ios-list';
                            /*iconName = focused
                                ? 'list-circle'
                                : 'list-circle-outline';*/
                        } else if (route.name === 'Add') {
                            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Decks" component={DeckStackComponent} />
                <Tab.Screen name="Add" component={AddDeck} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

