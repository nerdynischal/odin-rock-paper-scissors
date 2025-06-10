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

const displayHumanChoiceHTML = document.querySelector(".human-choice");
const displayComputerChoiceHTML = document.querySelector(".computer-choice");
const playedMovesContainer = document.querySelectorAll(
  ".played-moves-container"
);

//function to set display images for moves played
function displayPlayedMove(humanChoice, computerChoice) {
  displayHumanChoiceHTML.src = `images/${humanChoice}.png`;
  displayComputerChoiceHTML.src = `images/${computerChoice}.png`;
}

const humanMovesContainer = playedMovesContainer[0];
const computerMovesContainer = playedMovesContainer[1];

function updateWinnerMoveDisplay(player) {
  player.style.borderColor = "green";
  player.style.transform = "scale(1.2)";
}

function updateLoserMoveDisplay(player) {
  player.style.borderColor = "red";
  player.style.transform = "scale(1)";
}

function resetDisplay(player) {
  player.style.borderColor = "grey";
  player.style.transform = "scale(1)";
}

//Play a single round
function playRound(humanChoice, computerChoice) {
  displayPlayedMove(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    resetDisplay(humanMovesContainer);
    resetDisplay(computerMovesContainer);
    return "It's a tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    updateWinnerMoveDisplay(computerMovesContainer);
    updateLoserMoveDisplay(humanMovesContainer);
    return `You lose!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    updateWinnerMoveDisplay(humanMovesContainer);
    updateLoserMoveDisplay(computerMovesContainer);
    return `You Win!`;
  }
}

function checkWinnner() {
  if (humanScore == 5) {
    return "Congratulations, You won!";
  } else if (computerScore == 5) {
    return "Game Over! You lost!";
  }
}

function isGameOver() {
  if (humanScore == 5 || computerScore == 5) {
    return true;
  }
}

const buttons = document.querySelectorAll("button");
const textDisplayHTML = document.querySelector(".text-display");
const resultHTML = document.querySelector(".js-result");

const playerScoreHTML = document.querySelector(".js-player-score");
const computerScoreHTML = document.querySelector(".js-computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    textDisplayHTML.style.display = "initial";
    resultHTML.textContent = result;
    playerScoreHTML.textContent = humanScore;
    computerScoreHTML.textContent = computerScore;

    if (isGameOver()) {
      const winner = checkWinnner();
      resultHTML.textContent = winner;
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});
