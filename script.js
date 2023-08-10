window.onload = function() {
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;
    var language = navigator.language;
    var colorDepth = screen.colorDepth;
    var pixelRatio = window.devicePixelRatio;
    var plugins = "";
    var mimeTypes = "";
    var cookiesEnabled = navigator.cookieEnabled;
    var timeZone = new Date().getTimezoneOffset();
    var doNotTrack = navigator.doNotTrack;
    var hardwareConcurrency = navigator.hardwareConcurrency;
    var maxTouchPoints = navigator.maxTouchPoints;
    var connectionType = navigator.connection.type;
    var effectiveType = navigator.connection.effectiveType;
    var networkInformation = "connection type: " + connectionType + "\neffective type: " + effectiveType + "\nmax touch points: " + maxTouchPoints + "\nhardware concurrency: " + hardwareConcurrency + "\ndo not track: " + doNotTrack + "\n";
    for (var i = 0; i < navigator.plugins.length; i++) {
        plugins += navigator.plugins[i].name + "; ";
        mimeTypes += navigator.plugins[i].name + ": " + navigator.plugins[i].filename + "\n";
    }
    var fingerprint = "```user agent: " + userAgent + "\nplatform: " + platform + "\nlanguage: " + language + "\ncolor depth: " + colorDepth + "\npixel ratio: " + pixelRatio + "\ncookies enabled: " + cookiesEnabled + "\ntimezone: " + timeZone + "\n" + "network information:\n" + networkInformation + "\nplugins: " + plugins + "\nmime types:\n" + mimeTypes + "```";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/webhook");
    var params = JSON.stringify({
        content: fingerprint
    });
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(params);
}
