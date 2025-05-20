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
    console.log("It's a tie");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

playGame();
