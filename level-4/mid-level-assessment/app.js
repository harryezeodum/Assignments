function filterAnagrams(arr, target) {
    const wordsArr = [];
    const targetWord = target.split("");

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].split("").includes(targetWord[i]))
        wordsArr.push(arr[i])
    }
    return wordsArr;
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

function sortByMultipleCriteria(people) {
    people.sort((a, b) => {
        return a.age - b.age
    })
    return people
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]