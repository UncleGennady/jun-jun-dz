'use strict';
const bodyEl = document.body;
bodyEl.style.backgroundColor = 'pink'
function createTable(){
    const value = 100;
    const colums = 10;
    let table = document.createElement('table');
    bodyEl.prepend(table);
    table.setAttribute('border', '2');

    function createTRow(items, colums){
        let number = 0;
        for (let index = 0; index < items/colums ; index++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let i = 0; i < colums; i++) {
                let td = document.createElement('td');
                tr.append(td);
                number +=1;
                td.textContent = number;
            }
            }
    }
    createTRow(value, colums)

}
createTable();



