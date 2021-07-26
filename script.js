'use strict'

const addTaskBtn = document.querySelector('.btn');
const valuee = document.querySelector('.input');
const Task_box=document.querySelector('.tasks');
const edit=document.querySelector('.fa-pencil');
const done=document.querySelector('.fa-check');
const del = document.querySelector('.fa-remove');

let tasks=false
let count=1;
console.log(valuee.value)


// adding new tasks to the list on click of add task button
addTaskBtn.addEventListener('click',function(){
    console.log(valuee.value);
    const dT=new Date();
    // creating the required array
    const dateAndDay =`${dT.getMonth()+1}/${dT.getDate()}/${dT.getFullYear() } @ ${dT.getHours()}:${dT.getMinutes()}:${dT.getSeconds()}`

    //generating the required html
    const html= `<div class="box" id="b${count}">
                <div class="box-upper">
                    <div class="box-upper-left">
                        <i class="left fa fa-tasks"></i>
                        ToDo 01 ${valuee.value}
                    </div>
                    <div>
                        ${dateAndDay}
                    </div>
                </div>
                
                <div class="box-lower">
                    <i class="fa fa-pencil"></i> 
                    <i class="fa fa-check"></i> 
                    <i class="fa fa-remove"></i>
                </div>
                 
            </div>`;

    count=count+1;

    // adding the html at appropriate places
    if (tasks===false){
    Task_box.innerHTML="";
    Task_box.innerHTML=html;
    tasks=true
    }
    else{
    Task_box.innerHTML=Task_box.innerHTML+html;
}})

// marking a task as done
done.addEventListener('click', function (){

})

