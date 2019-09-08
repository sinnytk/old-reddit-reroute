const oldreddit = "https://old.reddit.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const path = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
        return {redirectUrl: `${oldreddit}${path}`};
    },
    {
        urls: ["*://reddit.com/*","*://www.reddit.com/*"],
        types: ['main_frame']
    },
    ["blocking"]
);