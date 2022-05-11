'use strict';
//dz-37
let ul = document.querySelector('ul');
console.log(ul);

function getAttributesValue(elem) {
    let arr =[];
    for (let item of elem.attributes) {
        arr.push( item.value);
    }
    return arr;
}

function getAttributesName(elem) {
    let arr =[];
    for (let item of elem.attributes) {
        arr.push(item);
    }
    return arr;
}
let userName = 'sasha'
console.log(getAttributesValue(ul));
console.log(getAttributesName(ul));
ul.lastElementChild.textContent = 'Привет меня зовут ' + userName ;
ul.firstElementChild.setAttribute('data-my-name', userName);
ul.removeAttribute('data-dog-tail');




