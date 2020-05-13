"use strict";

function init() {
    /* объявляю глобальные переменные */
    window.kekarray = ["короче", "коммунист", "Поздравляем", "Оперативная", "COVID-19", "Коронавирус", "Видеозаписи", "МЕДИТИРОВАТЬ", "СЕРИАЛ", "ПЕРЕДАЧИ", "Деньги", "Сыра", "Эх", "Проводите", "Крутая"];
    window.ammountOfFilteredPosts = 0;
    /* нахожу элементы */
    let post_content_el = document.getElementsByClassName('_post_content');
    let textes_array = new Array(); 
    /* заполняю массивы */
    for (let i in post_content_el) {
        // console.log(wall_post_text_el[i].innerText);
        textes_array.push(post_content_el[i].innerText); // заполняем массив textes_array текстом из записей
    }
    /* вывожу статы массивов */
    console.log(`кол-во текстовых элементов: ${textes_array.length}`);
    /* по итогу возвращаю массивы другим массивом */
    let inited = [textes_array,post_content_el];
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

function delete_post() {
    let textes_array = main_data[0];
    let post_content_el = main_data[1];
    let delcount = 0;
    for (let i in textes_array) {
        let tempwrk = textes_array[i];
        tempwrk = post_content_el[tempwrk[0]];
        tempwrk.parentNode.removeChild(tempwrk);
        delcount += 1;
    }
    console.log(`убито записей - ${delcount}`);
}

function main() {
    window.main_data = init();
    check_textes_array();
    delete_post();
}

main();