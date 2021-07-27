'use strict'

// declaring all variables that are needed

const addTaskBtn = document.querySelector('.btn');
const valuee = document.querySelector('.input');
const taskBox=document.querySelector('.tasks');

let Data="";
let taskNum= localStorage.length ? Math.max(...Object.keys(localStorage))+1:1;
let numItems=0;


//calculating length of non null values in local storage also creating the inner html code for the taskbox
for (let i = 1; i <= taskNum; i++) {
    localStorage.getItem(i)
    if (localStorage.getItem(i)!==null){
        Data=Data+localStorage.getItem(i);
        numItems=numItems+1
    }        
}


// checking to see if we have something in local storage or not
if (numItems===0){
    taskBox.innerHTML="You currently do not have any tasks added";   
}
else{
    taskBox.innerHTML="";
    taskBox.innerHTML=Data;
}


// adding new tasks to the list on click of add task button
addTaskBtn.addEventListener('click',function(){

    const dT=new Date();

    // creating the required array
    const dateAndDay =`${dT.getMonth()+1}/${dT.getDate()}/${dT.getFullYear() } @ ${dT.getHours()}:${dT.getMinutes()}:${dT.getSeconds()}`

    //generating the required html
    const html= `<div class="box" id="b${taskNum}">
                <div class="box-upper">
                    <div class="box-upper-left">
                        <i class="left fa fa-tasks"></i>
                        ToDo 0${taskNum} ${valuee.value}
                    </div>
                    <div>
                        ${dateAndDay}
                    </div>
                </div>
                
                <div class="box-lower">
                    <i class="fa fa-pencil" id="p${taskNum}"></i> 
                    <i class="fa fa-check" id="c${taskNum}"></i> 
                    <i class="fa fa-remove" id="r${taskNum}"></i>
                </div>
                 
            </div>`;

    localStorage.setItem(taskNum, html)
            
    // adding the html at appropriate places
    if (taskNum===1){
        taskBox.innerHTML="";
        taskBox.innerHTML=html;
        taskNum=taskNum+1
    }
    else{
        taskBox.innerHTML=taskBox.innerHTML+html;
        taskNum=taskNum+1
}

})

// deleting a task
taskBox.addEventListener('click', function (e){

    if (e.target.classList.contains('fa-remove')){

        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);
        elem.parentNode.removeChild(elem)

        console.log(e.target.id[1])

        localStorage.removeItem(e.target.id[1])
        console.log("......................")
        console.log(taskNum)
        taskNum= Math.max(...Object.keys(localStorage))+1
        console.log(typeof taskNum)
        if (taskNum=='-Infinity')
        {
            taskNum=1
        }

    }
    if (taskNum===1){
        taskBox.textContent="You currently do not have any tasks added";
    }

})

// marking a task as done
taskBox.addEventListener('click', function (e){
    if (e.target.classList.contains('fa-check')){
        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);
        elem.classList.add("donee")
        // const outer= document.createElement('div');
        // outer.classList.add("box")
        // outer.classList.add("donee")
        // outer.id=idd;
        // outer.innerHTML=elem.innerHTML
        // localStorage.setItem(e.target.id[1], outer)
        // console.log(outer)    
    }
})
 