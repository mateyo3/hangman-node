//Global variables & arrays
var guessesRemaining = 2;
var blanks = 0;
var guessWord = "";
var guessWordLetters = [];
var lettersGuessed =[];
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

//constructor function: Word
function Word(guessWord, blanksAndCorrect, lettersGuessed, guessesRemaining){
	this.guessWord = guessWord; //do not print this
	this.blanksAndCorrect = blanksAndCorrect;
	this.lettersGuessed = lettersGuessed;
	this.guessesRemaining = guessesRemaining;

}// end: constructor function: Word

//print method to display Word constructor function objects
Word.prototype.printInfo = function() {
	console.log("\nSecret word: " + this.blanksAndCorrect + "\nLetters Guessed: " + lettersGuessed + "\nGuesses Remaining: " + this.guessesRemaining);
};


//start inquirer for user input
var inquirer = require("inquirer");

//start questions
inquirer.prompt([
	//input username
	{
    type: "input",
    name: "name",
    message: "Guess a letter"
	}
]).then(function(answers) {
	var newWord = new Word(answers.guessWord, answers.blanksAndCorrect, answers.lettersGuessed, answers.guessesRemaining);
	newWord.printInfo();
	
});








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




// //constructor function: Letter
// function Letter(){
// 	this.letter = letter;
// }//end: constructor function: Letter

// var askQuestion = function() {

// 	if (count < 2) {
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
