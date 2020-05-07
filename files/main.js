document.querySelector('button').addEventListener('click',start, false);
let files = ['check_tab.js','check_wallposts_vk.js','its_not_interestin.js']
let nowfile = 1;

function start() {
        let res1 = chrome.tabs.executeScript(details={file: files[nowfile]}, function(textes_array,callback) {return textes_array});
        chrome.tabs.executeScript(details={code: "main(res1)", file: files[2]});
}