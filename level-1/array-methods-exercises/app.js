var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(`Vegetables: ${vegetables}`);

fruit.shift();
console.log(`Fruits: ${fruit}`);

var index = fruit.indexOf("orange");
console.log(`Index of "orange" is at: ${index}`);

fruit.push(index);
console.log(`Fruits: ${fruit}`);

var length = vegetables.length;
console.log(`The length of the array is: ${length}`);

vegetables.push(length);
console.log(`Vegetables: ${vegetables}`);

const food = fruit.concat(vegetables);
console.log(`The new food array is: ${food}`);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

var string = food.join(", ");
console.log(string);



