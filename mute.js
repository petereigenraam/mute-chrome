chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var blockedUrls = [
            'www.facebook.com',
            'www.youtube.com',
            'www.geenstijl.nl',
            'www.reddit.com'
        ];

        rv = false;
        for (var i=0; i < blockedUrls.length; i += 1) {
            if (details.url.indexOf(blockedUrls[i]) !== -1) {
                rv = true;
            }
        }

        return { cancel: rv };
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);