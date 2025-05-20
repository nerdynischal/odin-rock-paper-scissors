let humanScore = 0;
let computerScore = 0;

//Generate a random computer move
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Get player move
function getHumanChoice() {
  const humanMove = prompt("Whats your move?");
  return humanMove.toLowerCase();
}

//Play a single round
function playRound(humanChoice, computerChoice) {
  console.log(
    `You played ${humanChoice} and the computer played ${computerChoice}`
  );

  if (humanChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  }
}

function checkWinnner() {
  if (humanScore == 5) {
    return "Congratulations, You have won!";
  } else if (computerScore == 5) {
    return "Game Over! You have lost!";
  }
}

function isGameOver() {
  if (humanScore == 5 || computerScore == 5) {
    return true;
  }
}

const buttons = document.querySelectorAll("button");
const resultHTML = document.querySelector(".js-result");
const movesHTML = document.querySelector(".js-moves");
const scoresHTML = document.querySelector(".js-scores");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    resultHTML.textContent = result;
    movesHTML.textContent = `You played ${humanChoice} and the computer played ${computerChoice}`;
    scoresHTML.textContent = `Player's Score: ${humanScore} Computer Score: ${computerScore}`;

    if (isGameOver()) {
      const winner = checkWinnner();
      resultHTML.textContent = winner;
      movesHTML.textContent = "";
      scoresHTML.textContent = `Final Scores - Player's Score: ${humanScore} Computer Score: ${computerScore}`;
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});
