//Write a function called extractInitials that takes an array
//of full names and returns a new array containing only the initials of each name.

function extractInitials(names) {
    const initialsArray = [];

    for (let i = 0; i < names.length; i++) {
        const initials = names[i].split(" ")[0].slice(0, 1) + names[i].split(" ")[1].slice(0, 1);
        initialsArray.push(initials);
    }
    return initialsArray
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']

//Write a function called filterByProperty that takes an array of objects and a property name as input.
//The function should return a new array containing only the objects that have a specific value for the given property.

function filterByProperty(objects, propertyName, propertyValue) {
    const filteredProperty = objects.filter(object => object[propertyName] === propertyValue);
    return filteredProperty;
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByUSA = filterByProperty(people, 'country', 'USA');
const filteredByCanada = filterByProperty(people, 'country', 'Canada');
const filteredByAustralia = filterByProperty(people, 'country', 'Australia');
const filteredByAge = filterByProperty(people, 'age', 30);
const filteredByName = filterByProperty(people, 'name', 'David');
console.log(filteredByUSA);
console.log(filteredByCanada);
console.log(filteredByAustralia);
console.log(filteredByAge);
console.log(filteredByName);