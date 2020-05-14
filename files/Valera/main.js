"use strict";

const buttonstart_el = document.getElementById('startbtn');
const readbutton_el = document.getElementById('readbutton');
const createjson_el = document.getElementById('createjson');

buttonstart_el.addEventListener('click',start, false);
readbutton_el.addEventListener('click',readfile,false);
createjson_el.addEventListener('click',receiveTextFrom,false);

window.kekarray = Array();

function init() {
        if (localStorage.getItem('arrofexceptions') != null) {
                document.forms.getkeywords.elements.txtarea.value = localStorage.getItem('arrofexceptions');
        }
}

function start() {
        console.log(kekarray);
        chrome.tabs.executeScript({code: ('window.kekarray = "' + kekarray + '";')});
        chrome.tabs.executeScript({file: 'check_wallposts_vk.js'});
}

function readfile() {
        if (document.querySelector('file_inp').files.length == 0) {
                console.log('no file found');
                return;
        }
        let file = document.querySelector('file_inp').files[0];
        let reader = new FileReader();
        reader.addEventListener('loadstart',function() {
                console.log('началось чтение файла');
        });

        reader.addEventListener('load',function(e) {
                let jsonstring = e.target.result;
                return jsonstring;
        });

        reader.addEventListener('error',function(){
                console.log('ошибка чтения файла');
        });
        
        reader.addEventListener('progress',function(e){
                if (e.lengthComputable == true) {
                        let percent_read = Math.floor((e.loaded / e.total) * 100);
                        console.log(`процентов загружено - ${percent_read}`);
                }
        });

        let jsonstring = reader.readAsText(file);
        jsonstring = JSON.parse(jsonstring);
        console.log(jsonstring + ' ' + typeof(jsonstring));
}

function receiveTextFrom() {
        let txtfromarea = document.forms.getkeywords.elements.txtarea.value;
        localStorage.setItem('arrofexceptions', txtfromarea);
        window.kekarray = txtfromarea.split(',');
        console.log(kekarray);
}

init();