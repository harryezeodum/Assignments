const square = document.getElementById('colorSquare');

function onClicked() {
    square.style.backgroundColor = "purple";
}
function onMouse() {
    square.style.backgroundColor = "blue";
}
function onMouseDown() {
    square.style.backgroundColor = "green";
}
function onMouseUp() {
    square.style.backgroundColor = "yellow";
}
function doubleClicked() {
    square.style.backgroundColor = "black";
}
function scrolled() {
    square.style.backgroundColor = "orange";
}
function keyPress() {
    alert("Hello");
}
square.addEventListener('click', onClicked);
square.addEventListener("mouseover", onMouse);
square.addEventListener("mousedown", onMouseDown);
square.addEventListener("mouseup", onMouseUp);
square.addEventListener("dblclick", doubleClicked);
square.addEventListener("scroll", scrolled);
square.addEventListener("keypress", keyPress);

