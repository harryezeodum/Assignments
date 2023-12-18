let peoples = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabets = "abcdefghijklmnopqrstuvwxyz"

console.log(forception(peoples, alphabets));


function forception(people, alphabet){
    // your code here
    const peopleAlphabet = [];
    
    for (let i = 0; i < people.length; i++){
        const peopleNames = people[i] + ": ";
        peopleAlphabet.push(peopleNames);
        for (let j = 0; j < alphabet.length; j++) {
            const alphabets = alphabet[j].toUpperCase();
            peopleAlphabet.push(alphabets);
        }
    } return peopleAlphabet;
}
