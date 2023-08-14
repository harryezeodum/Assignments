var header = document.getElementById("header");
const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this";
h1.style.textAlign = "center";
header.appendChild(h1);

const p = document.createElement("p")
p.textContent = "wrote the JavaScript";
p.style.textAlign = "center";
header.appendChild(p);

p.setAttribute("id", "span");
var pElement = document.getElementById("span");
const span = document.createElement("span");
span.textContent = "Harry Ezeodum ";
span.style.color = "pink";
pElement.prepend(span);



var messageLeft = document.getElementsByClassName("message left");
 var messages = ["I am feeling Happy today!", "Today is gonna a great day!"];
 for (var i = 0; i < messageLeft.length; i++) {
    messageLeft[i].textContent = messages[i];
 }

 var messageRight = document.getElementsByClassName("message right");
 var newMessages = ["I am going to the soccer game", "Congratulations on your wedding"];
 for (var i = 0; i < messageRight.length; i++) {
    messageRight[i].textContent = newMessages[i];
 }

 var clear = document.getElementById("clear-button");
 function myButton() {
    messageLeft[0].textContent = " ";
    messageLeft[1].textContent = " ";
    messageRight[0].textContent = " ";
    messageRight[1].textContent = " ";
 }
 clear.addEventListener("click", myButton);

 var dropDown = document.getElementById("theme-drop-down");
 var leftMessages = document.querySelectorAll(".left");
 var rightMessages = document.querySelectorAll(".right");
  function myDropDown () {
for (var i = 0; i < leftMessages.length; i++) {
    if (dropDown.value === "theme-two") {
        leftMessages[i].style.backgroundColor = "red";
        rightMessages[i].style.backgroundColor = "black";
        rightMessages[i].style.color = "white";
    } else if (dropDown.value === "theme-one"){
        leftMessages[i].style.backgroundColor = "burlywood";
        rightMessages[i].style.backgroundColor = "lightblue";
        rightMessages[i].style.color = "black";
    }
}
 }

 dropDown.addEventListener("change", myDropDown);







