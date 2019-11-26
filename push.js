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
   "endpoint": "https://fcm.googleapis.com/fcm/send/cZ3QJ9-nxrU:APA91bE1kw3K3xPy7QmlHoPZCnOXGatmQgC3_c8Zc_TCGoR4TTlm8m4U1D6lnOe-5il7eOpTl5jgOZ5qhTiGChkxYJVQv15MZufF_m81aCH1vwXuzGeF8jJ0Lf6Ge5EDRwkGxcyyjjwa",
   "keys": {
       "p256dh": "BFgYu8vQ5Zaln9H91egsZw0g4Xu6Cfeg1wqCroZBUhCpVtQUrO8Hi7Yk1sPTPlD32ZiHkDYTiPf/GpVpllDqWA8=",
       "auth": "2YW94Eq4ojCwkpqOO0NQbA=="
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