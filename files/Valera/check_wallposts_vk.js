"use strict";

function init() {
    /* объявляю глобальные переменные */
    window.kekarray = ["короче", "коммунист", "Поздравляем", "Оперативная", "COVID-19", "Коронавирус", "Видеозаписи", "МЕДИТИРОВАТЬ", "СЕРИАЛ", "ПЕРЕДАЧИ"];
    window.ammountOfFilteredPosts = 0;
    /* нахожу элементы */
    const wall_post_text_el = document.getElementsByClassName('wall_post_text');
    const ui_actions_el = document.querySelectorAll(".ui_actions_menu_item");
    let textes_array = new Array(); 
    let button_not_interested = new Array();
    /* заполняю массивы */
    for (let i in wall_post_text_el) {
        // console.log(wall_post_text_el[i].innerText);
        textes_array.push(wall_post_text_el[i].innerText); // заполняем массив textes_array текстом из записей
    }
    for (let i in ui_actions_el) {
        if (ui_actions_el[i].innerText === "Это не интересно") {
            // console.log(ui_actions_el[i]);
            button_not_interested.push(ui_actions_el[i]); // заполняем массив button_not_interested кнопками "Это не интересно"
        }
    }
    /* вывожу статы массивов */
    console.log(`кол-во текстовых элементов: ${textes_array.length}`);
    console.log(`кол-во кнопок "не интересно": ${button_not_interested.length}`);
    /* по итогу возвращаю массивы другим массивом */
    let inited = [textes_array, button_not_interested];
    return inited;
}

function check_textes_array() {
    let textes_array = main_data[0];
    let ammount = ammountOfFilteredPosts;
    let cleared_textes_array = new Array();

    for (let i in textes_array) { // чекаем элементы в массиве с текстами записей
        for (let o in kekarray) { // чекаем элементы в массиве с исключениями
            if (textes_array[i] != undefined && textes_array[i].indexOf(kekarray[o]) != -1) {
                console.log('совпадение: ' + textes_array[i]);
                cleared_textes_array.push([Number(i), textes_array[i]]);
                ammount += 1
            }    
        }
    }

    console.log(`кол-во отсортированных записей: ${ammount}`);
    main_data[0] = cleared_textes_array;
    // console.log(main_data[0]);
}

function create_buttons_array() {

    let btns_array = main_data[1];
    let cleared_btns_array = new Array();
    let txts_array = main_data[0];

    for (let i in btns_array) {
        for (let o in txts_array) {
            if (txts_array[o][0] == i) {
                cleared_btns_array.push(btns_array[i]);
            }
        }
    }

    console.log(cleared_btns_array);
}

function main() {
    window.main_data = init();
    check_textes_array();
    create_buttons_array();
}

main();