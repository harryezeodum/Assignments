//console.log(axios);
const editForm = document.editTodo;
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
        checkbox.addEventListener("change", function(){
            if(checkbox.checked){
                axios.put("https://api.vschool.io/harry/todo/" + list[i]._id, {completed: true})
                .then(() => getTodos())
                .catch(err => console.log(err))
            } else if(checkbox.checked === false){
                axios.put("https://api.vschool.io/harry/todo/" + list[i]._id, {completed: false})
                .then(() => getTodos())
                .catch(err => console.log(err))
            }
        });
        const edit = document.createElement("button");
        edit.addEventListener("click", function() {
            axios.get("https://api.vschool.io/harry/todo/"+ list[i]._id)
                 .then((response) => getTodos(response.data))
                 .catch(err => console.log(err));
                 
            const save = document.createElement("button");
            save.textContent = "Save"
            const titleLabel = document.createElement("label");
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Title: ";
            const title = document.createElement("input");
            title.setAttribute("name", "title");
            title.value = list[i].title;
            const descriptionLabel = document.createElement("label");
            descriptionLabel.textContent = "Description: "
            const description = document.createElement("input");
            description.setAttribute("name", "description");
            description.value = list[i].description;
            const priceLabel = document.createElement("label");
            priceLabel.textContent = "Price: "
            const price = document.createElement("input");
            price.setAttribute("name", "price");
            price.value = list[i].price;
            const completedLabel = document.createElement("label");
            completedLabel.textContent = "Completed: "
            const completed = document.createElement("input");
            completed.setAttribute("type", "checkbox");
            completed.setAttribute("name", "completed");
            const updateTodo = {
                title: editForm.title.value,
                description: description.value,
                price: price.value,
                completed: completed.checked
            }

            save.addEventListener("click", function() {
                axios.put("https://api.vschool.io/harry/todo/" + list[i]._id, updateTodo)
                .then(() => getTodos())
                .catch(err => console.log(err));
            })

            

            editForm.appendChild(titleLabel);
            editForm.appendChild(title);
            editForm.appendChild(descriptionLabel);
            editForm.appendChild(description),
            editForm.appendChild(priceLabel);
            editForm.appendChild(price);
            editForm.appendChild(completedLabel);
            editForm.appendChild(completed);
            editForm.appendChild(save);
        })

            //li.innerHTML = "";
            // li.appendChild(titleLabel);
            // li.appendChild(title);
            // li.appendChild(descriptionLabel);
            // li.appendChild(description),
            // li.appendChild(priceLabel);
            // li.appendChild(price);
            // li.appendChild(completedLabel);
            // li.appendChild(completed);
            // li.appendChild(save);

        const del = document.createElement("button");
        del.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/harry/todo/"+ list[i]._id)
                 .then(() => getTodos())
                 .catch(err => console.log(err));

        })
        edit.textContent = " Edit";
        del.textContent = " Delete"
        //del.setAttribute("class", "del");
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



    