//Global variables & arrays
var guessWord = "";
var blanks = 0;
var guessesRemaining = 9;
var guessWordLetters = [];
var letterGuessed =[];
var blanksAndCorrect = [];
var incorrectGuess = [];


//Read text from words.txt file to choose random word and display blanks
function randomWord() {
	var fs = require("fs");
	fs.readFile("words.txt", "utf8", function(error, data) {

		if (error) {
		return console.log(error);
		}

		//check that the words.txt file is being read
		console.log("Every word in the words.txt\n******\n" + data);

		var wordArr = data.toString().split("\n");
		guessWord = wordArr[Math.floor(Math.random() * wordArr.length)];
		
		//check that random word is working
		console.log("******");
		console.log("The word is: " + guessWord);

		//split guessWord into array of letters
		guessWordLetters = guessWord.split("");
		//check that .split is working
		console.log("This is an array: " + guessWordLetters);

		//displays blanks based on number of letters in guessWordLetters array
		blanks = guessWordLetters.length;
		console.log("Number of letters in guessWord: " + blanks);

		blanksAndCorrect = [];
		incorrectGuess = [];

		for (var i = 0; i < guessWordLetters.length; i++){
			blanksAndCorrect.push("_");
		}

		//display letters in console as blanks
		console.log("blanksAndCorrect: " + blanksAndCorrect);
	});


}//end: function(word)

//run randomWord function
randomWord();







// //start inquirer for user input
// var inquirer = require("inquirer");

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




// function game(){
// 	console.log("Directions: Press a key to guess the letters in the word.")
// }

// //constructor function: Word
// function Word(word){
// 	this.word = word;
// }// end: constructor function: Word


// //constructor function: Letter
// function Letter(){
// 	this.letter = letter;
// }//end: constructor function: Letter

// var askQuestion = function() {

// 	if (count < 3) {
// 		inquirer.prompt([
// 			{
// 				name: "question"
// 				message: "What's your guess?"
// 			}
// 		])
// 	}

// 	}.then(function(checkLetter){

// 		askQuestion();
// 		});

// }
