var inquirer = require("inquirer");

//start questions
inquirer.prompt([
//input user name
{
    type: "input",
    name: "name",
    message: "Who are you?"
  },

  {
    type: "confirm",
    name: "play",
    message: "Do you want to play Hangman?",
    default: true
  },

]).then(function(user) {

  if (user.play === true) {
    console.log("Let's begin!");
    game();
  }
 });

var letterGuessed =[];


function game(){
	console.log("Directions: Press a key to guess the letters in the word.")
}

function Word(){

}

function Letter(){

}