//set var
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerGuess = "";
var winSound = new Audio("assets/audio/applause.mp3");
var loseSound = new Audio("assets/audio/lose.mp3");
var keystroke = new Audio("assets/audio/keystroke.mp3");



//computer random guess as a function
var getGuess = function (){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}

//reset game function
var reset = function () {
    guessesLeft = 9;
    yourGuessesSoFar = [];
    getGuess();
}

//display to html
document.getElementById("wins-text").innerHTML = wins;

document.getElementById("losses-text").innerHTML = losses;

document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;

document.getElementById("yourguesses-text").innerHTML = "Your Guesses So Far: ";

//calling computer guess function 
getGuess();

//user make guess
document.onkeyup = function(event) {
   
 
    //determine which key was pressed
    var userGuess = event.key;
    console.log(userGuess);
    
    //sound effect for user pressing a key
    keystroke.play();
    
   
    //record user guess into yourGuessesSoFar arry
    yourGuessesSoFar.push(userGuess);


    if ( userGuess === computerGuess) {
        
        wins ++;
        winSound.play();
        reset();

        
    } else if (userGuess !== computerGuess && guessesLeft < 2) {
        losses++;
        loseSound.play();
        reset();

    } else if (userGuess !== computerGuess) {
        guessesLeft--;

    } else {
        console.log();
    }

    //write result to html
    document.getElementById("wins-text").innerHTML = wins;

    document.getElementById("losses-text").innerHTML = losses;

    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;

    document.getElementById("yourguesses-text").innerHTML = "Your Guesses So Far: " + yourGuessesSoFar;

    


}

