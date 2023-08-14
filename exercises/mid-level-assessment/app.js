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
function removeDuplicates(numArray){
    // define an empty array
    const uniqueNumber = [];
    // iterate through Array parameter and store in a variable num
    for (const num of numArray) {
        // check to see if num is already in uniqueNumber and if not, save it
        if (!uniqueNumber.includes(num)) {
            uniqueNumber.push(num);
        }
    } return uniqueNumber;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]