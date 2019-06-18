chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: "https://ketchup.today/channels/search/?url=" + tab.url });
});