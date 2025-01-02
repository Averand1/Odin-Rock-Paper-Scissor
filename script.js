const body = document.body;
const buttons = document.querySelectorAll("button");
const humScore = document.querySelector(".human-score");
const compScore = document.querySelector(".computer-score");

function computerChoice() {
  let value = Math.random();
  let choice = "";

  if (value < 0.3) {
    choice = "Rock";
  } else if (0.3 < value && value < 0.6) {
    choice = "Paper";
  } else if (0.6 < value) {
    choice = "Scissor";
  }
  return choice;
}

function humanChoice() {
  let humanVal = prompt("Enter Rock, Paper, Scissor");
  let value = humanVal.toLocaleUpperCase();
  let choice = "";
  if (value == "ROCK") {
    choice = "Rock";
  } else if (value == "PAPER") {
    choice = "Paper";
  } else if (value == "SCISSOR") {
    choice = "Scissor";
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanVal) {
  let compVal = computerChoice();
  let humVal = humanVal;
  let result = "";

  if (compVal == humVal) {
    alert("It's a draw");
  } else if (compVal == "Rock") {
    if (humVal == "Paper") {
      result = "Player wins";
      humanScore++;
      humScore.textContent = `Player Score: ${humanScore}`;
    } else {
      result = "Computer Wins";
      computerScore++;
      compScore.textContent = `Computer Score: ${computerScore}`;
    }
  } else if (compVal == "Paper") {
    if (humVal == "Scissor") {
      result = "Player wins";
      humanScore++;
      humScore.textContent = `Player Score: ${humanScore}`;
    } else {
      result = "Computer Wins";
      computerScore++;
      compScore.textContent = `Computer Score: ${computerScore}`;
    }
  } else if (compVal == "Scissor") {
    if (humVal == "Rock") {
      result = "Player wins";
      humanScore++;
      humScore.textContent = `Player Score: ${humanScore}`;
    } else {
      result = "Computer Wins";
      computerScore++;
      compScore.textContent = `Computer Score: ${computerScore}`;
    }
  }
  return (
    result +
    " | Human Score: " +
    humanScore +
    " | Computer Score: " +
    computerScore
  );
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let humanVal = e.target.textContent;
    playRound(humanVal);
  });
});

playRound();
