//Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure 
//this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). 
//You only need to delete `var` and insert `let` and `const`
//John is the pet owner, and his name should be stored differently than the other names.

const named = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: " + name + ", " + "Pet type: " + pet.type) 
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", named);
    return petObjects
}

runForLoop(["cat", "dog", "rabbit"])

//### **Task 1**
//Re-write this `.map()` using an arrow function:
//Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, 
//and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"];

const mapVegetables = (arr) => arr.map((carrot) => ({ type: "carrot", name: carrot }));

console.log(mapVegetables(carrots));

//Re-write this .filter() ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => arr.filter(person => person.friendly);
console.log(filterForFriendly(people));

//Re-write the following functions to be arrow functions:
const doMathSum = (a, b) => a + b
console.log(doMathSum(2, 3));

const produceProduct = (a, b) => a * b
console.log(produceProduct(5, 5));

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}
console.log(printString());
console.log(printString("Kat", "Stark", 40));

//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog");
 }
 console.log(filterForDogs(animals));

//Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
function locationAndName(location, name) {
    return `Hi ${name}! 
Welcome to ${location}.
I hope you are enjoying your stay. Please ask the president of ${location} if you need anything.`;
}
console.log(locationAndName("Hawaii", "Janice"));
 
function collectAnimals(...animal) {
    /*and here*/
    return animal;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit, 
        sweets,
        vegetables
    };
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]));

             function parseSentence({location, duration}){
                return `We're going to have a good time in ${location} for ${duration}`
              }
              
              console.log(parseSentence({
                location: "Burly Idaho",
                duration: "2 weeks"
              }));




