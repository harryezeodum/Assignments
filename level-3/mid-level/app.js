// Challenge 1: Sort Array with Preserved Index for -1 Values

// function solution(arr) {
//     // Separate -1 values and their indices from non -1 values
//     const nonNegativeValues = arr.filter((num) => num !== -1).sort((a, b) => a - b);
//     const indicesOfNegativeOne = arr.map((num, index) => (num === -1 ? index : null)).filter((index) => index !== null);
  
//     // Insert sorted non -1 values back into the original array at their original index positions
//     indicesOfNegativeOne.forEach((index, nonNegativeIndex) => {
//       arr[index] = nonNegativeValues[nonNegativeIndex];
//     });
  
//     return arr;
//   }

  
  function solution(arr) {
  
  if(arr.includes(-1)){
      const filtered = arr.filter(item => item !== -1)
      filtered.sort((a, b) => a - b)
      for(let i = 0; i < arr.length; i++){
          if (arr[i] !== -1){
              arr[i] = filtered[0]
              filtered.splice(0, 1)
          }
      }
  } else arr.sort((a, b) => a - b)
  

  return arr
  
}
  
  
  // Test cases
  console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
  console.log(solution([5, 3, 1]));
  console.log(solution([-1, -1, -1, -1]));
  console.log(solution([100, -1, 50, -1, 75]));
  

  // Challenge 2: Count Vowels

  function countVowels(string){
    //change the input into lower Case
    const lowerCaseStrings = string.toLowerCase();

    let vowelCount = 0;

    for(let i = 0; i < lowerCaseStrings.length; i++){
        if(lowerCaseStrings[i] === "a" || lowerCaseStrings[i] === "e" || lowerCaseStrings[i] === "i" || lowerCaseStrings[i] === "o" || lowerCaseStrings[i] === "u"){
            vowelCount++;
        }
    }
    return vowelCount;
  }

const input = 'Hello, World!';

console.log(countVowels(input)); // Output: 3

const input1 = 'Counting Vowels';

console.log(countVowels(input1)); // Output: 5

// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
  const twoNums = [];
 for(let i = 0; i < numbers.length; i++){
  for(let j = i + 1; j < numbers.length; j++) {
    if(numbers[i] + numbers[j] === target) {
      twoNums.push(numbers[i], numbers[j]);
      break;
      
    }
  }
 } return twoNums;
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5] 