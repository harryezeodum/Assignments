function sortedOfAge(arr){
    //Your code here
     const sortedAge = arr.filter(filter => filter.age >= 18).sort((a, b) => a.lastName.localeCompare(b.lastName))
    .map(people => `<li>${people.firstName} ${people.lastName} is ${people.age}</li>`);
    return sortedAge;
 }

function peopleWithLastNamesYorA(arr) {
    const names = arr.filter(nameWithYorA => {
      const newNames = nameWithYorA.lastName.endsWith("y") || nameWithYorA.lastName.endsWith("a");
      return newNames;
    })
    return names;
}

 var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
 console.log(sortedOfAge(peopleArray));
 console.log(peopleWithLastNamesYorA(peopleArray));
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 var input = "";

try {
  if(input == "") {
    throw new Error("Input cannot be empty");
  } else if(input.length > 5) {
    throw "Input is too big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}
