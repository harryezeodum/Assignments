// getting the Form name
var form = document["addItem"]
// Adding an event listener to prevent refresh
form.addEventListener("submit", function(e){
    e.preventDefault();

    // Saving the user's input into a variable & clearing the form
    var item = form.title.value
    form.title.value = "";
 
    // getting the ul element and saving into a variable
    var ul = document.getElementById("list");
    // creating a li, div and button tags and setting the value. 
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.textContent = item;
    div.setAttribute("id", "div");

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.setAttribute("class", "edit");

    const del = document.createElement("button");
    del.textContent = "X";
    del.setAttribute("class", "delete");

    //adding the user input to the ul
    ul.appendChild(li);
    li.appendChild(div);
    li.appendChild(edit);
    li.appendChild(del);

    // creating a function to delete each item
    function deleteItem(event) {
        if(event.target.classList.contains("delete")){
          event.target.closest("li").remove();
        }
      }
       ul.addEventListener("click", deleteItem);

    function editItem(edit) {
      if (edit.target.classList.contains("edit")) {
          var box = edit.target.createElement("input");
          
          var editList = document.getElementById("div").textContent;
          box.textContent = editList.textContent;
          li.appendChild(box);
        }
      }
      ul.addEventListener("click", editItem); 
})
 



