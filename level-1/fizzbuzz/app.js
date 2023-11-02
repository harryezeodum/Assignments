function fizzBuzz(number) {
    const tally = {
        fizz: 0,
        buzz: 0,
        fizzbuzz: 0
    }

    for (let i = 1; i <= number; i++) {
        let numbers = "";
        if (i % 3 === 0) {
            numbers += "Fizz";
            tally.fizz++;
        }

        if (i % 5 === 0) {
            numbers += "Buzz";
            tally.buzz++;
        }

        if (numbers === "") {
            numbers += i;
        }
        
        if (numbers === "FizzBuzz") {
            tally.fizzbuzz++;
        }

        console.log(numbers);
    }
    return tally;
}

const result = fizzBuzz(150);
console.log(result);
  


  