#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number -done

// 2) user input for guessing number -done 

//3) compare user input with computer generate number and show result

const randomnumber = Math.floor (Math.random()* 16 + 1);

const answer = await  inquirer.prompt([
{
  name: "userGuessednumber",
  type: "number",
  message: "please guess a number between 1-6: ",
},
]);

if (answer.userGuessednumber === randomnumber) {
    console.log ("congtratulation! you guessed right number.");
} else {
    console.log ("you guessed wroung answer");
}