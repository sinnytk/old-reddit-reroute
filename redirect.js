const oldreddit = "https://old.reddit.com";
chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {redirectUrl: `${oldreddit}`};
    },
    {
        urls: ["*://reddit.com/*","*://www.reddit.com/*"],
        types: ['main_frame']
    },
    ["blocking"]
);