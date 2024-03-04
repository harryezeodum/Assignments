// Addition
const section1 = document.getElementById("add");
const addButton = document.getElementById("addition");

function addition(e) {
    e.preventDefault();
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const result = num1 + num2;
    const div = document.createElement("div");
    div.textContent = result;
    section1.append(div);
}

addButton.addEventListener("click", addition);

// Substraction
const section2 = document.getElementById("sub");
const subButton = document.getElementById("substract");

function substraction(e) {
    e.preventDefault();
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const result = num3 - num4;
    const div = document.createElement("div");
    div.textContent = result;
    section2.append(div);
}
subButton.addEventListener("click", substraction);

 //Multiplication
const section3 = document.getElementById("mul");
const multiplyButton = document.getElementById("multiply");

function multiply(e) {
    e.preventDefault();
    const num5 = parseInt(document.getElementById("num5").value);
    const num6 = parseInt(document.getElementById("num6").value);
    const result = num5 * num6;
    const div = document.createElement("div");
    div.textContent = result;
    section3.append(div);
}
multiplyButton.addEventListener("click", multiply);
