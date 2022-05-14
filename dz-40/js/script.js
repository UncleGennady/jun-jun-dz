'use strict';
void function() {
    const form = document.querySelector('#form');
    const dataKey = 'formData'
    const inputsSelector = 'input, textarea, select';
    form.addEventListener('submit', event => {
        event.preventDefault();
        let inputs = document.querySelectorAll(inputsSelector);
        console.log(inputs);
        inputs = Array.from(inputs);
        
        let data = inputs.reduce((acc, item)=>{
            acc[item.name] = item.value;
            return acc;
            
        },{})
        console.log(data)

        data = JSON.stringify(data);
        localStorage.setItem(dataKey, data)

      
    })
    document.addEventListener('DOMContentLoaded', () =>{
        let data = localStorage.getItem(dataKey);
        if(!data) return; 

        data =JSON.parse(data);

        let inputs = document.querySelectorAll(inputsSelector);

        inputs.forEach((item)=>{
            try{
                item.value = data[item.name];
            }catch(err){
                console.log(err)
            }
            
        })
    } )
    
}()