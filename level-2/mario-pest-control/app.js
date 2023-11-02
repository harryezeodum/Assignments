const goombasTotalCost = document.getElementById("goombasTotalCost");
function goombasCost(e) {
    e.preventDefault();
    const goombas = parseInt(document.getElementById("goombas").value);
    const spanGoombas = document.getElementById("spanGoombas");
    const totalGoombas = document.getElementById("totalGoombas");
    const totalCostOfGoombas = 5 * goombas;
    totalGoombas.textContent = "$" + totalCostOfGoombas;
    spanGoombas.append(totalGoombas);
 }
 document.body.addEventListener("click", goombasCost);

const bobombsTotalCost = document.getElementById("bob-ombsTotalCost");
function bobombsCost(e) {
    e.preventDefault();
    const bobombs = parseInt(document.getElementById("bob-ombs").value);
    const spanBobOmbs = document.getElementById("spanBob-ombs");
    const totalBobOmbs = document.getElementById("totalBob-ombs");
    const totalCostOfGoombas = 7 * bobombs;
    totalBobOmbs.textContent = "$" + totalCostOfGoombas;
    spanBobOmbs.append(totalBobOmbs);
 }
 document.body.addEventListener("click", bobombsCost);

 const cheepCheepsTotalCost = document.getElementById("cheep-cheepsTotalCost");
function cheepcheepCost(e) {
    e.preventDefault();
    const cheepCheeps = parseInt(document.getElementById("cheep-cheeps").value);
    const spanCheepCheeps = document.getElementById("spanCheep-cheeps");
    const totalCheepCheeps = document.getElementById("totalCheep-cheeps");
    const totalCostOfCheepCheeps = 11 * cheepCheeps;
    totalCheepCheeps.textContent = "$" + totalCostOfCheepCheeps;
    spanCheepCheeps.append(totalCheepCheeps);
 }
 document.body.addEventListener("click", cheepcheepCost);

 localStorage.setItem("name", "Harry");
 localStorage.setItem("isTrue", "true")
 localStorage.setItem("array", JSON.stringify(["John", "Mark", "Jack", 10, true]))
 localStorage.setItem("Objects",JSON.stringify({
    name: "Harry", age: 35, isMale: true
 }))

 const names = JSON.parse(localStorage.getItem("array"));
 console.log(names);
 const objects = JSON.parse(localStorage.getItem("Objects"));
 console.log(objects);

 localStorage.removeItem("isTrue");
 localStorage.Objects = JSON.stringify(["Rice"]);






