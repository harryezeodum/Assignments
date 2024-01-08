const readline = require('readline-sync');

const userName = readline.question("Please enter a username ");

console.log(`Welcome ${userName}!`);
console.log("You find yourself locked in a room. Your goal is to escape by finding the key and opening the door.");
console.log("You can't open the door unless you find the key first, you die if you put your hand in the hole.");

let hasKey = false;
let isAlive = true;
let hasOpenedDoor = false;

while (isAlive && !hasOpenedDoor) {
    const options = ["Find the key", "Open the door", "Put your hand in the hole", "sleep"];
    const index = readline.keyInSelect(options, "What would you like to do?");
    
    if (index === 0) {
        if (hasKey) {
            console.log("You already have the key.");
        } else {
            console.log("You found the key!");
            hasKey = true;
        }
    } else if (index === 1) {
        if (hasKey) {
            console.log("Congratulations! You've opened the door and escaped the room.");
            hasOpenedDoor = true;
        } else {
            console.log("The door is locked. You need to find the key.");
        }
    } else if (index === 2) {
        console.log("Oh no! You put your hand in the hole and died.");
        isAlive = false;
    } else {
        console.log("Invalid option. Try again.");
    }
}

console.log("Game over.");

