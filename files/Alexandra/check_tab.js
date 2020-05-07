"use strict";

let VK_TABS_IDS = [];

function CheckIdsList(tabs){
	let NEW_VK_IDS = [];
	if (tabs.length != 0){

		console.log("Checked");

		for (let i=0; i<tabs.length; i++){
			NEW_VK_IDS.push(tabs[i].id);
			console.log(typeof(tabs[i].id));
		}
		console.log(NEW_VK_IDS + " " + NEW_VK_IDS[0]);
	}
}

chrome.tabs.query({url: "https://www.vk.com/*"}, function(tabs){
	console.log("Initial tabs");
	VK_TABS_IDS = CheckIdsList(tabs);
});

chrome.tabs.onCreated.addListener(function(){
	console.log("One tab was created");
	chrome.tabs.query({url: "https://www.vk.com/*"}, function(tabs){
		VK_TABS_IDS = CheckIdsList(tabs);
	});
});

chrome.tabs.onUpdated.addListener(function(){
	console.log("One tab was updated");
	chrome.tabs.query({url: "https://www.vk.com/*"}, function(tabs){
		VK_TABS_IDS = CheckIdsList(tabs);
	});
});

chrome.tabs.onRemoved.addListener(function(){
	console.log("One tab was removed");
	chrome.tabs.query({url: "https://www.vk.com/*"}, function(tabs){
		VK_TABS_IDS = CheckIdsList(tabs);
	});
});

chrome.tabs.onActivated.addListener(function(){
	chrome.tabs.query({url: "https://vk.com/*"}, function(tabs){
		if (tabs.length != 0){
			console.log("vk.com' tab was activated");
			console.log(tabs[0].id);
		}
	});
});
