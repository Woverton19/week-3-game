var wordBank = [
  "one",
  "look",
  "sixpack",
  "tacos"
];

var wins = 0;
var losses = 0;
var wrongGuesses = 0;

var wordIndex = wordBank[Math.floor(Math.random() * wordBank.length)];


var answerArray = [];
for (var i = 0; i < wordIndex.length; i++) {
  answerArray[i] = "_";
}

var lettersLeft = wordIndex.length;
var wrongGuesses = 0;


if (lettersLeft > 0 && wrongGuesses < 10) {
  
  document.write(answerArray.join(" "));
  
  document.onkeyup = function(event){
  	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  		letterGuessed(correctGuess);

  if (letterGuessed === null) {
    
    
  } 
  else if (letterGuessed.length !== 1) {
    
    console.log("Please enter a single letter.");
  } else {
    var correctGuess = false;
    for (var i = 0; i < wordIndex.length; i++) {
      if (wordIndex[i] === letterGuessed && answerArray[i] === "_") {
        answerArray[i] = letterGuessed;
        lettersLeft--;
        correctGuess = true;
      } else if (wordIndex[i] === letterGuessed) {
        console.log("You already guessed that letter.");
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      wrongGuesses++;
    }
  }


if (wrongGuesses === 10) {
  console.log("Game Over");
} else {
  console.log(answerArray.join(" "));
  console.log("wins" + wordIndex);
}
var html = "<p>wins:" + wins + "</p>" + "<p>wins:" + losses + "</p>";
console.log(html)
document.querySelector("#hangman").innerHTML = html;
}
}

