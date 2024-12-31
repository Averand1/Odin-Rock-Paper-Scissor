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
  let promptValue = prompt("Choose Rock, Paper or Scissor");
  let value = promptValue.toLocaleUpperCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;

  function playRound() {
    let compVal = computerChoice();
    let humVal = humanChoice();
    let result = "";

    if (compVal == humVal) {
      result = "It's a Draw";
    } else if (compVal == "Rock") {
      if (humVal == "Paper") {
        result = "Player wins";
        humanScore++;
      } else {
        result = "Computer Wins";
        computerScore++;
      }
    } else if (compVal == "Paper") {
      if (humVal == "Scissor") {
        result = "Player wins";
        humanScore++;
      } else {
        result = "Computer Wins";
        computerScore++;
      }
    } else if (compVal == "Scissor") {
      if (humVal == "Rock") {
        result = "Player wins";
        humanScore++;
      } else {
        result = "Computer Wins";
        computerScore++;
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

  for (let i = 0; i < 5; i++) {
    winner = playRound();
    console.log(winner);
  }
}

playGame();
