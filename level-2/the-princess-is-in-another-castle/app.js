class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

    gotHit() {
        if (this.hasStar) {
            this.hasStar = false;
            console.log("Your star protected you!");
        } else {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";
            } else if (this.status === "Small") {
                this.status = "Dead";
            }
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("Congratulations! you got Powered up");
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Star: ${this.hasStar}\n`);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

const player = new Player("Harry", 0, "Big", true);

const gameInterval = setInterval(() => {
    const randomValue = getRandomInt(0, 2);
    if (randomValue === 0) {
        player.gotHit();
    } else if (randomValue === 1) {
        player.gotPowerup();
    } else {
        player.addCoin();
    }

    player.print();

    if (player.status === "Dead") {
        clearInterval(gameInterval);
        console.log("Game Over!");
    }
}, 1000);

