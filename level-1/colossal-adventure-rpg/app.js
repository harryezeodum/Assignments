const readline = require('readline-sync');

class Character {
    constructor(name, healthPoint, inventory) {
        this.name = name;
        this.healthPoint = healthPoint;
        this.inventory = inventory;
    }
}

Character.prototype.printInventory = () => {
    console.log(this.inventory);
}


const playerName = readline.question(`Please enter your name \n`)
let playerInventory = ["Arrow", "Bow"];

const player = new Character(playerName, 70, playerInventory);
const joker = new Character("Joker", 50, ["Cards", "Bomb", "Pen"]);
const michaelMyers = new Character("Michael Myers", 50, ["Saw", "Hammer"]);
const voldemort = new Character("Voldemort", 50, ["Magic Wand"]);

let enemies = [joker, michaelMyers, voldemort];

// Function to generate a random enemy
function generateRandomEnemy () {
    const randomEmemy = Math.floor(Math.random() * enemies.length);
    return enemies[randomEmemy];
}
 // Function to calculate battle damage
function calculateDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Welcome ${playerName}, to the RPG game. Please sit tight and enjoy the adventure \n`);

let isPlayerActive = true;
while(isPlayerActive) {
    const action = readline.question(`Press "w" to walk or "p" to print your inventory\n`, {limit: ["w", "p"]});
    if (action === "w") {
        console.log(`You chose to walk \n`);
        let enemy = [];
        if (Math.random() < 0.25) {
            enemy = generateRandomEnemy();
            console.log(`A wild enemy ${enemy.name} has appeared!!! \n`);
    
            while (player.healthPoint > 0 && enemy.healthPoint > 0) {
                const playerDamage = calculateDamage(10, 20);
                const enemyDamage = calculateDamage(5, 15);
                console.log(`${player.name}'s Health Point: ${player.healthPoint}`);
                console.log(`${enemy.name}'s Health Point: ${enemy.healthPoint} \n`)
    
                const battleAction = readline.question(`Attack (a) or Run (r)? \n`, {limit: ["a", "r"]});
                let playerAttack = calculateDamage(10, 20);
                let enemyAttack = calculateDamage(5, 15); 

                if (battleAction === "a"){
                    console.log(`\n${player.name} attacks ${enemy.name} for ${playerAttack} damage`);
                    console.log(`${enemy.name} attacks ${player.name} for ${enemyAttack} damage \n`);

                    player.healthPoint -= enemyAttack;
                    enemy.healthPoint -= playerAttack;
                    
                    if (player.healthPoint <= 0) {
                        console.log(`\nGame Over! ${player.name} has been defeated by ${enemy.name}`);
                        isPlayerActive = false;
                    }

                    else if (enemy.healthPoint <= 0) {
                        console.log(`${player.name} has defeated ${enemy.name}!`);
                        player.healthPoint += 20;
                        console.log(`20 points have been added to ${player.name}'s health point.`)
                        console.log(`${player.name}'s new Health Point: ${player.healthPoint}`);
                        console.log(`${enemy.name}'s weapons: ${enemy.inventory} has been added to your inventory\n`);
                        playerInventory.push(enemy.inventory);
                        console.log(`Press "p" to confirm your new inventory has been added! \n`)
                        break;
                    }
                } else if (battleAction === "r") {
                    if (Math.random() < 0.50) {
                        console.log(`\n${player.name} successfully escapes from ${enemy.name}`)
                        break;
                    } else {
                        console.log(`\nFailed to escape! ${enemy.name} attacks ${player.name} for ${enemyAttack} damage.\n`)
                        player.healthPoint -= enemyAttack;
                        if (player.healthPoint <= 0) {
                            isPlayerActive = false;
                        }
                    }
                }
            }
        } else {
            console.log('You continue walking without encountering any enemies.');
        }
    } else if (action === "p") {
        console.log(`\nPlayer Name: ${player.name}`);
        console.log(`Health Point: ${player.healthPoint}`);
        console.log(`Inventory: ${player.inventory}\n`);
    }
}
console.log("Game over! Thanks for playing.");
