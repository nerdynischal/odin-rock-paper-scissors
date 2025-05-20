//Generate a random computer move
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const computerMove = getComputerChoice();
console.log(computerMove);

//Get player move
function getHumanChoice() {
  const humanMove = prompt("Whats your move?");
  console.log(humanMove);
}

getHumanChoice();
