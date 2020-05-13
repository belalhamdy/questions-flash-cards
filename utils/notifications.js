import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions';
import {AsyncStorage} from "react-native";

const notificationsKey = "@questions-flash-cards-key:notifications";

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(notificationsKey).then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

const notification = {
    title: "You forgot solving quiz today.",
    body: "Answer quiz per day to improve yourself.",
    ios: {
        sound: true
    },
    android: {
        sound: true,
        vibrate: true,
    },
};


export async function setLocalNotification() {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
        await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }

    AsyncStorage.getItem(notificationsKey).then(JSON.parse).then(async (data) => {
        if (data === null) {
            await Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date(Date.now());
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(12);
            tomorrow.setMinutes(0);
            await Notifications.scheduleLocalNotificationAsync(
                notification,
                {
                    time: tomorrow,
                    repeat: 'day',
                }
            );
        }
    })
}




