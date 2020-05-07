"use strict";

function init() {
    let wall_post_text_el = document.getElementsByClassName('wall_post_text');
    return wall_post_text_el
}

function text_from_wallpost(wall_post_text_el) {
    for (let i in wall_post_text_el) {
        textes_array.push(wall_post_text_el[i].innerText); // заполняем массив textes_array текстом из записей
    }
    console.log('кол-во текстовых элементов: ' + textes_array.length);
}

function check_textes_array() {
    let ammount = ammountOfFilteredPosts;
    for (let i in textes_array) { // чекаем элементы в массиве с текстами записей
        for (let o in kekarray) { // чекаем элементы в массиве с исключениями
            if (textes_array[i] != undefined && textes_array[i].indexOf(kekarray[o]) != -1) {
                console.log('совпадение: ' + textes_array[i]);
                ammount += 1
            }    
        }
    }
    console.log('кол-во отсортированных записей: ' + ammount);
}

function main1() {
    let inited = init();
    window.textes_array = new Array();
    window.kekarray = ["короче", "коммунист", "Поздравляем", "Оперативная", "COVID-19", "Коронавирус"];
    window.ammountOfFilteredPosts = 0;
    text_from_wallpost(inited);
    check_textes_array();
}

main1();