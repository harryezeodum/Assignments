import React, { useState } from 'react';

const DiceBox = () => {
  // State to store the dice numbers
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Method to generate random numbers and update state
  const rollDice = () => {
    const newNumbers = numbers.map(() => Math.floor(Math.random() * 6) + 1);
    setNumbers(newNumbers);
  };

const renderNumbers = numbers.map((number, index) => <h3 key={index}>{number}</h3>)

  return (
    <div>
      <div>
        {renderNumbers}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default DiceBox;
