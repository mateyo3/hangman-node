//Read text from words.txt file to choose random word and display blanks
// function randomWord() {
	var fs = require("fs");
	fs.readFile("words.txt", "utf8", function(error, data) {

		if (error) {
		return console.log(error);
		}

		//check that the words.txt file is being read
		// console.log("Every word in the words.txt\n******\n" + data);

		var wordArr = data.toString().split("\n");
		guessWord = wordArr[Math.floor(Math.random() * wordArr.length)];
		
		//check that random word is working
		// console.log("******");
		// console.log(guessWord);

		//split guessWord into array of letters
		guessWordLetters = guessWord.split("");
		//check that .split is working
		// console.log("This is an array: " + guessWordLetters);

		//displays blanks based on number of letters in guessWordLetters array
		blanks = guessWordLetters.length;
		// console.log("Number of letters in guessWord: " + blanks);

		blanksAndCorrect = [];

		for (var i = 0; i < guessWordLetters.length; i++){
			blanksAndCorrect.push("_");
		}

		// display letters in console as blanks
		// console.log("blanksAndCorrect: " + blanksAndCorrect);
	});
// }//end: function(word)

//run randomWord function
// randomWord();

