function capitalizeAndLowercase(string) {
    var capitalizedAndLowercasedString = string.toUpperCase() + string.toLowerCase();
    return capitalizedAndLowercasedString;
}
console.log(capitalizeAndLowercase("HelLo"));

function findMiddleIndex(string) {
    const middleIndex = Math.floor(string.length / 2);
    return middleIndex;
}
console.log(findMiddleIndex("Hello World"))

function returnFirstHalf(string) {
    const middleIndex = findMiddleIndex(string);
    const firstHalf = string.slice(0, middleIndex)
    return firstHalf;
}
console.log(returnFirstHalf("Hello World"));

function firstHalfCapitalizeSecondHalfLowercase(string) {
    const middleIndex = findMiddleIndex(string);
    const firstHalf = returnFirstHalf(string).toUpperCase();
    const secondHalf = string.slice(middleIndex).toLowerCase();
    var capitalizedAndLowercase = firstHalf + secondHalf;
    return capitalizedAndLowercase;
}
console.log(firstHalfCapitalizeSecondHalfLowercase("Hello World"));

function capitalize(string) {
    const capitalized = string.split(" ");

    for (var i = 0; i < capitalized.length; i++) {
        capitalized[i] = capitalized[i][0].toUpperCase() + capitalized[i].slice(1);
    }
    return capitalized.join(" ");
}

console.log(capitalize("hey friends! practice practice practice!"));