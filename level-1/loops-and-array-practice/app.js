// #1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
const countComputer = [];
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        const items = officeItems[i]
        var count = countComputer.push(items);
    }
} 
console.log("There are " + count + " computers in the array");

// #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough")
    }else {
        console.log("not old enough ")
    }
  }

  // optional Challenges
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to watch Mad Max!")
    }else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to watch Mad Max!")
    }
  }

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, please let HIM in.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, please let HER in.");
        }
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
        } 
    }
}