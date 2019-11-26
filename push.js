var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BEtCUIYz7p_6Tg2hjzTXK-v4JjksnezIft4w9vqqWpDCCM-7slQnPeT9hY9g_Jzx-TQ0F1JUF1-r4Zrqg-yypH8",
   "privateKey": "mKxOxncqV-1J2lBOMaf8LCjV0g19jEbuYNHkUTBG054"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dtHSY2Uf6WE:APA91bG0V_JNevPl0Lemc0jb7n03PdHsN9pLZE_5QLpWFrEt26OllBZJ4oTnUlknJc4wFv49bq98bCAzkeBFhVYB_1miv4dW-hEwJBwg0BygTOvyigag8BejtN2JsNku2fxk-cRVK_W6",
   "keys": {
       "p256dh": "BE3/TX7UBu/WuytzLrMXZ5CITYscQKBKRZaehMcwMIaOzI/03qZybQ6U26Bxjd70ak0GU7HpjpNUwSI+8wh+/pk=",
       "auth": "rATsMDC52E/Ma0mgRUc9IQ=="
   }
};
var payload = 'Jadwal Liga Inggris sebentar lagi dimulai';
 
var options = {
   gcmAPIKey: '1079115611866',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);