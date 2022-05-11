'use strict';
const arr =  [1,2, [1.1,1.2,1.3, [1.11, 1.12, 1.13,[1.1,1.2,1.3, [1.11, 1.12, 1.13,]]]] ,3, [1.1,1.2,1.3, [1.11, 1.12, 1.13,]]];
const arr1 = [1,2, [1.1,1.2,1.3, ], 3];

const bodyEl = document.body;
function getGenarateList(value) {
  let placeInTheDocument = value ;
  return function generateList(array){
    let ul = document.createElement('ul');
    placeInTheDocument.prepend(ul);
    array.forEach(item => {
      let li = document.createElement('li');
      ul.append(li);
      if (Array.isArray(item)) {
        placeInTheDocument = li;
        generateList(item);
      }else{
        li.textContent = item;
      }
    });
  }
}

let generateList = getGenarateList(bodyEl)

generateList(arr);