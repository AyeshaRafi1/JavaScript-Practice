'use strict'

// declaring all variables that are needed

const addTaskBtn = document.querySelector('.btn');
const valuee = document.querySelector('.input');
const taskBox=document.querySelector('.tasks');

let Data="";
let taskNum= localStorage.length ? Math.max(...Object.keys(localStorage))+1:1;
let numItems=0;


//calculating length of non null values in local storage also creating the inner html code for the taskbox
for (let i = taskNum; i >0; i--) {
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
    valuee.value="";
            
    // adding the html at appropriate places
    if (taskNum===1){
        taskBox.innerHTML="";
        taskBox.innerHTML=html;
        taskNum=taskNum+1
    }
    else{
        taskBox.innerHTML=html+taskBox.innerHTML;
        taskNum=taskNum+1
}

})

// deleting a task
taskBox.addEventListener('click', function (e){

    if (e.target.classList.contains('fa-remove')){

        //getting the id of the parent element and then selecting that element
        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);

        // removing that element from html and local storage
        elem.parentNode.removeChild(elem)
        localStorage.removeItem(e.target.id[1])

        //getting the max number box that is stored in the local storage
        taskNum= Math.max(...Object.keys(localStorage))+1

        // if there is nothing in local storage then setting task num to 1
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
        // getting id of the parent div of this check sign
        const idd="b"+e.target.id[1]
        const elem= document.getElementById(idd);

        // adding the class that sets the colour to grey
        elem.classList.toggle("donee")

        // getting the html of this that was stored in local storage
        const htmll=localStorage.getItem(e.target.id[1])
        let html =htmll.split(" ")
        
        //updating that html
        if (elem.classList.contains("donee")){
            html[1]='class="box donee"'

        }
        else {
            html[1]='class="box"'
        }
        
        const final=html.join(" ")

        // updating the html in local storage
        localStorage.setItem(e.target.id[1], final)
    }
})
 