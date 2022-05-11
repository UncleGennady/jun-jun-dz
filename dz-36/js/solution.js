'use strict';
//dz-36

let ulList = document.getElementsByTagName('li');
let arr =[];
for (let li of ul) {
arr.push(li.innerHTML);
}
console.log('количество элементов ' + ul.length);
console.log(arr)



