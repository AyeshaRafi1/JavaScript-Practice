'use strict'

const addTaskBtn = document.querySelector('.btn');
const valuee = document.querySelector('.input');
const taskBox=document.querySelector('.tasks');


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
                    <i class="fa fa-pencil" id="p${count}"></i> 
                    <i class="fa fa-check" id="c${count}"></i> 
                    <i class="fa fa-remove" id="r${count}"></i>
                </div>
                 
            </div>`;

    count=count+1;

    // adding the html at appropriate places
    if (tasks===false){
        taskBox.innerHTML="";
        taskBox.innerHTML=html;
    tasks=true
    }
    else{
        taskBox.innerHTML=taskBox.innerHTML+html;
}})

// deleting a task
taskBox.addEventListener('click', function (e){
    if (e.target.classList.contains('fa-remove')){
        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);
        elem.parentNode.removeChild(elem)

    }

})



// marking a task as done
taskBox.addEventListener('click', function (e){
    console.log(e.target)
    if (e.target.classList.contains('fa-check')){
        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);
        
    }

})
 