'use strict';
void function () {
    const dataKey = 'formData';
    let data = localStorage.getItem(dataKey);
 
    data = JSON.parse(data);

    if (data === null){
       return alert ('нет данных в localStorage')
    }

    const ulList = (() => {
        let arr = [];
        for (const key in data) {
            data[key]==='' ? arr.push(key + ": " + 'нет данных') : arr.push(key + ": " + data[key] )
        }
        return arr;
    })()

    function createUl() {
        const ul = document.createElement('ul');
        document.body.prepend(ul);
        let index = 0;

        return function createLi (array) {
            const arr = array;
            const li = document.createElement('li');
            ul.append(li);
            li.textContent = arr[index];
            index++
            if(index < array.length) return createLi(arr);
         }
        
    }
    const createList = createUl();

    createList(ulList);


}()