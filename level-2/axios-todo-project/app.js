//console.log(axios);
function getTodos() {
    axios.get("https://api.vschool.io/harry/todo/")
    .then(response => listTodos(response.data))
    .catch(error => console.log(error));
}

function listTodos(list){
    const ol = document.getElementById("listTodos");
    ol.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        const li = document.createElement("li");
        const strike = document.createElement("s");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("name", "setcomplete");
        const edit = document.createElement("button");
        const del = document.createElement("button");
        edit.textContent = " Edit";
        del.textContent = " Delete"
        del.setAttribute("class", "del");
        if(list[i].completed) {
            strike.textContent = "Title: " + list[i].title + ". Description: " + list[i].description + ". Price: " + list[i].price + ". Completed: " + list[i].completed;
            checkbox.checked = true;
            li.appendChild(strike);
            li.appendChild(checkbox);
            li.appendChild(edit); 
            li.appendChild(del);
            ol.appendChild(li);
        }else {
            li.textContent = "Title: " + list[i].title + ". Description: " + list[i].description + ". Price: " + list[i].price + ". Completed: " + list[i].completed;
            li.appendChild(checkbox);
            li.appendChild(edit); 
            li.appendChild(del);
            ol.appendChild(li);
        } 
    }
}

getTodos();

const postTodo = document.createTodos;
postTodo.addEventListener("submit", postTodos);
function postTodos(e) {
    e.preventDefault();
    const todo = {
        title: postTodo.title.value,
        description: postTodo.description.value,
        price: postTodo.price.value,
        completed: postTodo.completed.checked
    }
    axios.post("https://api.vschool.io/harry/todo/", todo)
         .then(response => getTodos(response.data))
         .catch(error => console.log(error));
         postTodo.title.value = "";
         postTodo.description.value = "";
         postTodo.price.value = "";
         postTodo.completed.checked = false;
}

// function deleteTodo(del) {
//     if(del.target.classList.contains("del")) {
//         del.target.closest("li").remove();
//     }
    
//     axios.delete("https://api.vschool.io/harry/todo/" + del._id)
//          .then(response => console.log(response))
//          .catch(error => console.log(error));
// }

// const deletedTodo = document.getElementsByClassName("del").target;
// console.log(deletedTodo.target);
// deletedTodo.target.addEventListener("click", deleteTodo);


const checkBoxId = document.getElementsByClassName("checkbox");
//checkBoxId.target.closest("checkbox");
console.log(checkBoxId);
function checkBox(id, checkbox) {
    const completed = checkbox.checked;
    axios.put("https://api.vschool.io/harry/todo/" + id._id, { completed: completed})
     .then(response => {checkbox.nextElementSibling.classList.toggle("completed", completed)})
     .catch(error => console.log(error));
}
checkBoxId.addEventListener("click", checkBox);


// function deleteItem(event) {
//     if(event.target.classList.contains("delete")){
//       event.target.closest("li").remove();
//     }
//   }
//    ul.addEventListener("click", deleteItem);



    