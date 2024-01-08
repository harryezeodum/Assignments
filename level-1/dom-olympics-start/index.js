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



const messageLeft = document.getElementsByClassName("message left");
const messages = ["I am feeling Happy today!", "Today is gonna a great day!"];
for (let i = 0; i < messageLeft.length; i++) {
    messageLeft[i].textContent = messages[i];
}

const messageRight = document.getElementsByClassName("message right");
const newMessages = ["I am going to the soccer game", "Congratulations on your wedding"];
for (let i = 0; i < messageRight.length; i++) {
    messageRight[i].textContent = newMessages[i];
}

const clear = document.getElementById("clear-button");
function myButton() {
    messageLeft[0].textContent = "I have something serious to talk about";
    messageLeft[1].textContent = "I don't want to talk";
    messageRight[0].textContent = "I'm just a simple farmer";
    messageRight[1].textContent = "Today is a bad day";
}
clear.addEventListener("click", myButton);

var dropDown = document.getElementById("theme-drop-down");
var leftMessages = document.querySelectorAll(".left");
var rightMessages = document.querySelectorAll(".right");
function myDropDown() {
    for (var i = 0; i < leftMessages.length; i++) {
        if (dropDown.value === "theme-two") {
            leftMessages[i].style.backgroundColor = "red";
            rightMessages[i].style.backgroundColor = "black";
            rightMessages[i].style.color = "white";
        } else if (dropDown.value === "theme-one") {
            leftMessages[i].style.backgroundColor = "burlywood";
            rightMessages[i].style.backgroundColor = "lightblue";
            rightMessages[i].style.color = "black";
        }
    }
}

dropDown.addEventListener("change", myDropDown);







