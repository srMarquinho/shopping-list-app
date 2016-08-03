cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Coordinates",
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Position",
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.2.0",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-app-event": "1.2.0",
    "de.appplant.cordova.plugin.local-notification": "0.8.4"
};
// BOTTOM OF METADATA
});