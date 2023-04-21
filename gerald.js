window.onload = init;

function init() {
  guesses = ["rock", "paper", "scissors"];
  compChoice = "";  
  result = document.querySelector("#compGuess");
  yourScore = 0;
  compScore = 0;
}

function choose(yourChoice) {
  compChoice = guesses[Math.floor(Math.random()*guesses.length)];
  var guessClass = "far fa-hand-" + compChoice;
  result.className = guessClass;
  checkWin(yourChoice, compChoice);
}

function checkWin(yourChoice,compChoice) {
  var result = document.querySelector("#result");
  if ((yourChoice === "rock" && compChoice === "paper") || (yourChoice === "paper" && compChoice === "scissors") || (yourChoice === "scissors" && compChoice === "rock")) {
    printResult("You lost!!");
    result.style.backgroundColor = "tomato";
    compScore += 1;
  }
    else {
      if (yourChoice === compChoice) {
        printResult("It's a draw!!");
        result.style.backgroundColor = "lightyellow";
      }
      else {
        printResult("You won!!");
        result.style.backgroundColor = "lightgreen";
        yourScore += 1;
      }
    }
  printScore(yourScore, compScore);
  }
function printResult(result) {
  var res = document.querySelector("#result");
  res.innerHTML = result;
}
function printScore(you, comp) {
  document.querySelector("#yourScore").innerHTML = you;
  document.querySelector("#compScore").innerHTML = comp;
}