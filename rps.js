//Write Logic to get computer move
//a random number from 0 to 1 from Math.random
//if randomnumber less than 1/3 - rock
//if random number less than 2/3 - paper
//else - scissors

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
