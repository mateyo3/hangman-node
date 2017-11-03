var inquirer = require("inquirer");

var fs = require("fs");
fs.readFile("words.txt", "utf8", function(error, data) {

	if (error) {
	return console.log(error);
	}

	console.log("Every word in the array:\n" + data);

	// var wordArr = data.toString().split("/n");
	// var guessWord = wordArr(Math.floor(Math.random() * wordArr.length));
	// console.log("The word is: " + guessWord);
});

// //start questions
// inquirer.prompt([
// //input user name
// {
//     type: "input",
//     name: "name",
//     message: "Who are you?"
//   },

//   {
//     type: "confirm",
//     name: "play",
//     message: "Do you want to play Hangman?",
//     default: true
//   },

// ]).then(function(user) {

//   if (user.play === true) {
//     console.log("Let's begin!");
//     game();
//   }
//  });

// var letterGuessed =[];


// function game(){
// 	console.log("Directions: Press a key to guess the letters in the word.")
// }

// function Word(){

// }

// function Letter(){

// }


