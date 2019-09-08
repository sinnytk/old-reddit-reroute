chrome.webRequest.onBeforeRequest.addListener(
    function() {
        alert("hello world")
    },
    {urls: ["*://reddit.com/*","*://www.reddit.com/*"]}
);