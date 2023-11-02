const clickButton = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

localStorage.setItem("clickCountElement", 0);
let clickCounted = localStorage.getItem("clickCountElement");
clickCountElement.textContent = clickCounted;

clickButton.addEventListener('click', () => {
    clickCounted++;
    clickCountElement.textContent = clickCounted;
    localStorage.setItem('clickCountElement', clickCounted);
});




