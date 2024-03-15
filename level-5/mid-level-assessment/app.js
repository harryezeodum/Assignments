function extractUniqueCharacters(strings) {
    const arr = [];
    const word = strings.join("");

    for (let i = 0; i < word.length; i++) {
        if (!arr.includes(word[i])) {
            arr.push(word[i]);
        }
    }
    return arr;
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

function sortByProperty(objects, propertyName) {
    const newObject = objects.sort((a, b) => b[propertyName] - a[propertyName]);
    return newObject;
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);