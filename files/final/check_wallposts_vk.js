"use strict";

function init() {
    /* объявляю глобальные переменные */
    window.ammountOfFilteredPosts = 0;
    window.kekarray = window.kekarray[0];
    /* нахожу элементы */
    const post_content_el = document.getElementsByClassName('_post_content');
    let textes_array = new Array();
    for (let i = 0;i<post_content_el.length;i++) {
        let tempatr = post_content_el[i].getAttribute("class");
        if (tempatr.includes('reply') == false) {
            textes_array.push(post_content_el[i].innerText);
        }
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
    for (let i = 0; i<textes_array.length; i++) {
        for (let b = 0; b<post_content_el.length; b++) {
            if (b == textes_array[i][0]) {
                post_content_el[b].parentNode.removeChild(post_content_el[b]);
                delcount++;
            }    
        }
    }
    console.log(`убито записей - ${delcount}`);
}

function main() {
    window.main_data = init();
    check_textes_array();
    delete_post();
}

main();