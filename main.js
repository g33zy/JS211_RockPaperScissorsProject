// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  const cleanHand1 = hand1.trim().toLowerCase()
  const cleanHand2 = hand2.trim().toLowerCase()
  if (cleanHand1 === cleanHand2) {
    return "It's a tie!"
  }
  // if (cleanHand1 == 'rock' && cleanHand2 == 'rock') {
  //   return "It's a tie!"
  // }
  // if (cleanHand1 == 'paper' && cleanHand2 == 'paper') {
  //   return "It's a tie!"
  // }
  // if (cleanHand1 == 'scissors' && cleanHand2 == 'scissors') {
  //   return "It's a tie!"
  // }
  if (cleanHand1 == 'rock' && cleanHand2 == 'paper') {
    return "Hand two wins!"
  }
  if (cleanHand1 == 'paper' && cleanHand2 == 'scissors') {
    return "Hand two wins!"
  }
  if (cleanHand1 == 'scissors' && cleanHand2 == 'rock') {
    return "Hand two wins!"
  }
  if (cleanHand1 == 'paper' && cleanHand2 == 'rock') {
    return "Hand one wins!"
  }
  if (cleanHand1 == 'scissors' && cleanHand2 == 'paper') {
    return "Hand one wins!"
  }
  if (cleanHand1 == 'rock' && cleanHand2 == 'scissors') {
    return "Hand one wins!"
  }
  


}





  // const rockPaperScissors = (cleanHand1, cleanHand2) => {
  //   return (rock, paper) ? "Hand two wins!"
  //   : (paper, scissors) ? "Hand two wins!"
  //   : (scissors, rock) ? "Hand two wins!"
  //   : (paper, rock) ? "Hand one wins!"
  //   : (scissors, paper) ? "Hand one wins!"
  //   : (rock, scissors) ? "Hand one wins!"
  //   : (cleanHand1 === cleanHand2) ? "It's a tie!"
  // }



  // console.log(rockPaperScissors.trim());
  // console.log(rockPaperScissors.localCompare());
  // console.log(rockPaperScissors.toLowerCase())

  
  // Write code here
  // Use the unit test to see what is expected







// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
