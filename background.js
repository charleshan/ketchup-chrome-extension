chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: "https://ketchup.today/channels/search/?url=" + tab.url });
});

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     chrome.tabs.create({ url: "https://ketchup.today/channels/search/?url=" + url });
// 	});
// });