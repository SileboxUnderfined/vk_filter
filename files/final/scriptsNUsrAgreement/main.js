"use strict";

const buttonstart_el = document.getElementById('startbtn');
const createjson_el = document.getElementById('createjson');
const fileinp = document.getElementById('file_inp');

buttonstart_el.addEventListener('click', start, false);
createjson_el.addEventListener('click', receiveTextFrom, false);
fileinp.addEventListener('change', readfile, false);

window.kekarray = Array();

function init() {
    if (localStorage.getItem('inited') == null) {
        chrome.tabs.create({url: 'usrAgreement/usr_agreement.html', selected: true});
    }
    if (localStorage.getItem('arrofexceptions') != null) {
        document.forms.getkeywords.elements.txtarea.value = localStorage.getItem('arrofexceptions');
    }
}

function start() {
    if (document.forms.getkeywords.elements.txtarea.value != "") {
        let txtfromarea = document.forms.getkeywords.elements.txtarea.value;
        window.kekarray = txtfromarea.split(",");
    }
    chrome.tabs.query({ url: "https://vk.com/feed" }, function (tabs) {
        console.log(tabs);
        if (tabs.length == 0) {
            alert('error');
        } else {
            console.log(kekarray);
            let kkekarray = JSON.stringify(kekarray);
            chrome.tabs.executeScript(tabs.id, { code: ('window.kekarray = [' + kkekarray + '];') });
            chrome.tabs.executeScript(tabs.id, { file: 'scriptsNUsrAgreement/check_wallposts_vk.js' });
        }
    });
}

function readfile() {
    console.log(fileinp.files[0]);
    const file = fileinp.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function (e) {
        let result = e.target.result;
        localStorage.setItem('arrofexceptions', result);
        console.log(result);
        init();
    });
    reader.readAsText(file);
}

function receiveTextFrom() {
    let txtfromarea = document.forms.getkeywords.elements.txtarea.value;
    localStorage.setItem('arrofexceptions', txtfromarea);
    window.kekarray = txtfromarea.split(',');
    console.log(kekarray);
}

init();