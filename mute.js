var host = window.location.host;

checkUrl(host);

function checkUrl(host) {
    var blockedUrls = [
        'www.facebook.com',
        'youtube.com',
        'www.geenstijl.nl',
    ];

    if (blockedUrls.indexOf(host) !== -1) {
        window.location = chrome.extension.getURL("blocked.html");
        console.log('blocked ' + host);
    } else {
        console.log('allowed ' + host);
    }
}