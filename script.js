let todoInput = document.getElementById("todoInput")
let todoList = document.getElementById("todoList");

function addTask() {
    if (todoInput.value === "") {
        alert("Add Task")
    } else {
        let li = document.createElement('li')
        li.innerHTML = todoInput.value
        todoList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        todoInput.value = ""
        saveData()
    }
}


 todoList.addEventListener('click',(e)=>{
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }

    
 } , false)


 function saveData() {
    localStorage.setItem("data", todoList.innerHTML)
 }

 function showData() {
    todoList.innerHTML = localStorage.getItem("data")
 }
 showData()