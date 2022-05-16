'use strict';
void function (){
    let data = localStorage.getItem('formData');
    data = JSON.parse(data);

    if(data === null) return alert('нет данных в localStorage');

    const ul = document.createElement('ul');
    document.body.prepend(ul);
    
    for (const key in data) {

        const li = document.createElement('li');
        ul.append(li);
       
        data[key] === '' ? li.textContent = key + ': нет данных': li.textContent = key + ':' + data[key];
    }

}()