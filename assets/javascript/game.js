
console.log("JS READY")

var words = [
    "square",
    "circle",
    "triangle",
    "rectangle",
    "octagon",
    "hexagon",
    "pentagon",
    "polygon",
    "obtuse",
    "acute",
    "angle",
    "corner",
    "concave",
    "convex",
    "sides",]

console.log(words)
var userGuess;
var guesses;
var secretWord;
var secretArray;
var win;
var rowNumber = 0;
var score = 0;
var wrongput = document.getElementById("wrongput");
var rightput = document.getElementById("wordBlanks");

function randomWord () {
    secretWord = words[Math.round((Math.random() * (words.length)))];
    console.log(secretWord);
}

function makeArray () {
    secretArray = Array.from(secretWord);
    console.log(secretArray);

}

function guessDisplay() {
    document.getElementById("guessLeft").textContent = (guesses);
}
function scoreboard() {
    document.getElementById("scoreRight").textContent = (score);
}

function wordDivs() {
    var wordRow = document.createElement("div");
    wordRow.id = (rowNumber);
    wordRow.className = "row words";
    console.log("Row Number: " + rowNumber);
    document.getElementById("wordBlanks").appendChild(wordRow);
    

    for (var i = 0; i < secretArray.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = (secretArray[i]) + " ltrdiv";
        newDiv.textContent = ("_");
        document.getElementById(rowNumber).appendChild(newDiv);
        
    }
    guesses = 12;
    win = 0;
    guessDisplay()
    scoreboard()
    ++rowNumber;
    console.log("Next row: " + rowNumber);
}

function clearChildren(a) {
  while (a.hasChildNodes()) {
    a.removeChild(a.firstChild);
  }
}

function scoreChange(a) {
    if(a === 0) {
        score = 0
    }
    if(a > 0) {
        score = score + a
    }
    scoreboard()
}
function doneClass() {
   var b = document.getElementsByClassName("Y")

   for (var i = 0; i < b.length; i++) {
       b[i].className = ("done Y");
   }

}

randomWord ();
makeArray ();
wordDivs();

document.onkeyup = function(guess) {
    var userGuess = guess.key;
    //console.log(userGuess);
    if (secretWord.includes(userGuess)) {
        var x = document.getElementsByClassName(userGuess);
        win += x.length;
        console.log("win + " + x.length + " = " + win);
        for (var i = 0; i < x.length; i++) {
            
            for(i = 0; i < x.length; i++) {
            x[i].textContent = (userGuess);
            x[i].classList.add("Y")
            }
            doneClass()
        }
    }
    
    else {
        if (document.getElementById(userGuess + "_guessed")) {
            console.log("GUESSED!")
        }
        else{
        guesses = --guesses;
        console.log(guesses);
        guessDisplay()
        var newDiv = document.createElement("div");
        newDiv.id = (userGuess + "_guessed");
        newDiv.className = ("guessed");
        newDiv.textContent = (userGuess);
        wrongput.appendChild(newDiv);
        }
    }

    function winner () {
    if (win >= secretArray.length) {
            alert("SHAPES!");
            doneClass();
            scoreChange(win);
            randomWord ();
            makeArray ();
            wordDivs();
            clearChildren(wrongput);
        }
    }
    winner ()

    function loser () {
    if (guesses < 1) {
        alert("LOSER!");
        scoreChange(0)
        clearChildren(wrongput);
        clearChildren(rightput);
        randomWord ();
        makeArray ();
        wordDivs();
        }
    }
    loser ()
}






