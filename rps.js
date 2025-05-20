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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    document.querySelector(".js-result").textContent = result;

    document.querySelector(
      ".js-moves"
    ).textContent = `You played ${humanChoice} and the computer played ${computerChoice}`;
    document.querySelector(
      ".js-scores"
    ).textContent = `Player's Score: ${humanScore} Computer Score: ${computerScore}`;
  });
});

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   console.log("Your score: " + humanScore);
//   console.log("Computer score: " + computerScore);
// }

// playGame();
