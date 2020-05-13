import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions';
import {AsyncStorage} from "react-native";

const notificationsKey = "@questions-flash-cards-key:notifications";

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(notificationsKey).then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
    return {
        title: "You forgot solving quiz today.",
        body: "Answer quiz per day to improve yourself.",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            vibrate: true,
        },
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(notificationsKey).then(JSON.parse).then(async (data) => {
        if (data === null) {
            Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                    let tomorrow = new Date(Date.now());
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(12);
                    tomorrow.setMinutes(0);
                    Notifications.scheduleLocalNotificationAsync(createNotification(), {
                        time: tomorrow, repeat: "day"
                    })
            })
        }
    })
}
