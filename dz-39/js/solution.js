'use strict';
void function(){
    const bodyEl = document.body;
    bodyEl.style.backgroundColor = 'pink'
    const value = 100;
    const colums = 10;
    const createTable = (value,colums) =>{
        const table = document.createElement('table');
        bodyEl.prepend(table);
        table.setAttribute('border', '2');
    
        (() => {
            let number = 0;
            for (let index = 0; index < value/colums ; index++) {
                const tr = document.createElement('tr');
                table.append(tr);
                for (let i = 0; i < colums; i++) {
                    const td = document.createElement('td');
                    tr.append(td);
                    number +=1;
                    td.textContent = number;
                    if(number === value) break;
                }
                }
        })()
    
    }
    createTable(value, colums);
    
}()



