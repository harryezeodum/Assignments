// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers) {
    //your code here
    numbers.sort((a, b) => a - b);
    return numbers;
    }

    // Example usage:
//const numbers = [4, 2, 7, 1, 9, 5];
//const sortedNumbers = sortNumbers(numbers);
//console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
function convertToUppercase(strings) {
    // your code here
    const stringArray = strings.map((string) => string.toUpperCase());
    return stringArray;
    }

// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']    

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);  // Output: [2, 4, 6]