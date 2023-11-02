//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    const fiveAndGreater = arr.filter(num => num >= 5);
       return fiveAndGreater;
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  //Given an array of numbers, return a new array that only includes the even numbers
  function evensOnly(arr) {
    // your code here
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    // your code here
    const strings = arr.filter(string => string.length <= 5); 
    return strings;
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

  // Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
  function peopleWhoBelongToTheIlluminati(arr){
    // your code here
    const members = arr.filter(member => member.member === true)
     return members;
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  //Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
  function ofAge(arr){
    // your code here
    const adults = arr.filter(adult => adult.age >= 18); 
    return adults;
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
  
  
  
  