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
}console.log(numArr);

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitArr = [];
for (var i = 0; i < fruits.length; i +=2) {
    const lists = fruits[i];
    fruitArr.push(lists);
}console.log(fruitArr);

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
}console.log(names);

for (var i = 0; i < peopleArray.length; i++) {
    const lists = peopleArray[i].occupation;
    occupations.push(lists)
}console.log(occupations);

const names1 = [];
const occupations1 = [];
for (var i = 0; i < peopleArray.length; i += 2) {
    const lists = peopleArray[i].name;
    names1.push(lists);
}console.log(names1);

for (var i = 0; i < peopleArray.length; i += 2) {
    const lists = peopleArray[i + 1].occupation;
    occupations1.push(lists)
}console.log(occupations1);

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let results = [];
for (let i = 0; i < arr.length; i++) {
    const result = [];
    for (let j = 0; j < arr[i].length; j++) {
        result.push(i);
    } results.push(result);
} console.log(results);

const arrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
        arrs[i][j] = "x";
    }console.log(arrs[i]);
}



  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  
    