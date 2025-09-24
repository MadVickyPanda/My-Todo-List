//script for my todo list
//ÄNDRA ALLA '' till ""
const completedElement = document.querySelector("#completedNumber");
const inputTodo= document.querySelector("#input1");
const addToDoBtn=document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");
const todoList=document.querySelector("#todoList");
let todoText = "";
let completed = 0;
const allTheTodos = [];



addToDoBtn.addEventListener("click", addTodo);
//itemText.addEventListener("click", );

//function change status todotext and completed 
function changeStatus(todoText, completedStat){
    let findIndex = allTheTodos.map(n => n.name).indexOf(todoText);
    allTheTodos[findIndex].completed = completedStat;


};

function addTodo(){
    // things that will happen when you click the button
    infoTextElement.textContent="";
todoText = inputTodo.value;
//Message that you need to write something and avoid empty todos
 if (todoText.length == 0){
    infoTextElement.textContent="Du måste skriva något!"
    return;
 }

 //add the todo to the todo-array
 const todoObject={name:todoText, completed:false};
 allTheTodos.push(todoObject);
 

//create li
const item = document.createElement("li");
todoList.appendChild(item);


//Add todo text as a span on the li
const itemText = document.createElement("span");
itemText.innerText = todoText;

//add eventlistener to span with text
itemText.addEventListener("click",
    function(){
        if(itemText.getAttribute("class") == "completed") {
        itemText.setAttribute("class", "");
        completed--;
        completedElement.textContent= completed +" Slutförd!"
        changeStatus(itemText.innerText,false);
             }
        else 
        {
            itemText.setAttribute("class", "completed");
            completed++;
            completedElement.textContent= completed + " Sluförd!"
            changeStatus(itemText.innerText,true);
        }
    }


)
item.appendChild(itemText);

//add trashcan as a span on the li
const trashcan =document.createElement("span");
trashcan.innerHTML="&#11097;";
trashcan.setAttribute("class","trashcan");
item.appendChild(trashcan);
//empty input
trashcan.addEventListener("click", function(){
    item.remove();
}
);


inputTodo.value="";
}