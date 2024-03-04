for (var i = 0; i <= 9; i++) {
    console.log(i)
}

for (var i = 9; i >= 0; i--) {
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Bronze Medal
const numArr = [];
for (var i = 0; i <= 9; i++) {
    const num = i;
    numArr.push(num);
} console.log(numArr);

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitArr = [];
for (var i = 0; i < fruits.length; i += 2) {
    const lists = fruits[i];
    fruitArr.push(lists);
} console.log(fruitArr);

// Silver Medal
const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

const names = [];
const occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
    const lists = peopleArray[i].name;
    names.push(lists);
} console.log(names);

for (var i = 0; i < peopleArray.length; i++) {
    const lists = peopleArray[i].occupation;
    occupations.push(lists)
} console.log(occupations);

const names1 = [];
const occupations1 = [];
for (var i = 0; i < peopleArray.length; i += 2) {
    const lists = peopleArray[i].name;
    names1.push(lists);
} console.log(names1);

for (var i = 0; i < peopleArray.length; i += 2) {
    const lists = peopleArray[i + 1].occupation;
    occupations1.push(lists)
} console.log(occupations1);

//Create an array that mimics a grid like the following using nested for loops:
const arrNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let resultNumber = [];

for (let i = 0; i < arrNumber.length; i++) {
    const result = [];
    for (let j = 0; j < arrNumber[i].length; j++) {
        result.push(arrNumber[i][j] = 0);
    } resultNumber.push(result);
} console.log(resultNumber);


// Create an array that mimics a grid like the following using nested for loops:
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let results = [];
for (let i = 0; i < arr.length; i++) {
    const result = [];
    for (let j = 0; j < arr[i].length; j++) {
        result.push(i);
    } results.push(result);
} console.log(results);

//.Create an array that mimics a grid like the following using nested for loops:
const arrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let resultNum = [];
for (let i = 0; i < arrNum.length; i++) {
    const result = [];
    for (let j = 0; j < arrNum[i].length; j++) {
        result.push(j);
    } resultNum.push(result);
} console.log(resultNum);

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.
const arrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let resultNumbers = [];
for (let i = 0; i < arrs.length; i++) {
    const results = [];
    for (let j = 0; j < arrs[i].length; j++) {
        results.push(arrs[i][j] = "x")
    }resultNumbers.push(results);
} console.log(resultNumbers);



// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

