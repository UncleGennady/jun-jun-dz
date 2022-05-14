'use strict';
void function(){
  const arr =  [1,2, [1.1,1.2,1.3, [1.11, 1.12, 1.13,[1.1,1.2,1.3, [1.11, 1.12, 1.13,]]]] ,3, [1.1,1.2,1.3, [1.11, 1.12, 1.13,]]];
  const arr1 = [1,2, [1.1,1.2,1.3, ], 3];

  const bodyEl = document.body;

  function getList(value) {
    let place = value ;
    return function generateList(array){
      const ul = document.createElement('ul');
      place.prepend(ul);
      array.forEach(item => {
        const li = document.createElement('li');
        ul.append(li);
        if (Array.isArray(item)) {
          place = li;
          generateList(item);
        }else{
          li.textContent = item;
        }
      });
    }
  }

const generateList = getList(bodyEl)

generateList(arr);
}()
