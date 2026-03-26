function display(message) {
  const results = document.getElementById("results");
  results.innerHTML += `<p>${message}</p>`;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  document.getElementById("results").innerHTML = ""; // clears previous game

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      display("You win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      display("You win! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      display("You win! Scissors beats Paper");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore++;
      display("You lose! Rock beats Scissors");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      display("You lose! Paper beats Rock");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      computerScore++;
      display("You lose! Scissors beats Paper");
    } else {
      display(`It's a tie! You both chose ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    display(`--- Round ${i} ---`);
    playRound(getHumanChoice(), getComputerChoice());
    display(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  display("--- Game Over ---");
  if (humanScore > computerScore) {
    display(`You win the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    display(`You lose the game ${computerScore} to ${humanScore}!`);
  } else {
    display(`It's a tie game ${humanScore} to ${computerScore}!`);
  }
}