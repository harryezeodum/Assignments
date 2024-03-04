// Challenge 1:  Constructor Functions
function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getDetails = function() {
        return "Title: " + this.title + ", " + "Author: " + this.author + ", " + "Year: " + this.year;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960


// Challenge 2: Arrays and Loops
// function removeDuplicates(numArray){
//     // define an empty array
//     const uniqueNumber = [];
//     // iterate through Array parameter and store in a variable num
//     for (const num of numArray) {
//         // check to see if num is already in uniqueNumber and if not, save it
//         if (!uniqueNumber.includes(num)) {
//             uniqueNumber.push(num);
//         }
//     } return uniqueNumber;
// }

function removeDuplicates(numArray){
    // define an empty array
    const uniqueNumber = [];
    // iterate through Array parameter and store in a variable num
    for (let i = 0; i < numArray.length; i++) {
        // check to see if num is already in uniqueNumber and if not, save it
        if (uniqueNumber.includes(numArray[i])) {
            uniqueNumber.delete;
        }
        else {
            uniqueNumber.push(numArray[i])
        }
    } return uniqueNumber;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]

// Write a function called findEvenNumbersthat takes in an array of numbers and returns a new array
//  containing only the even numbers from the input array. Can you implement this function using arrays
//   and loops? Remember to consider the condition for determining even numbers.  Use the below code to test your solution.

function findEvenNumbers(arr) {
    // Your code here
    var evenNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 === 0) {
            evenNumbers.push(num)
        }
    } return evenNumbers;
}
    console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
    console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]