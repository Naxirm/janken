const choices = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

let playerSelection = prompt("Pierre papier ou ciseaux?");
const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("égalité");
  } else if (
    (playerSelection === "pierre" && computerSelection === "ciseaux") ||
    (playerSelection === "ciseaux" && computerSelection === "papier") ||
    (playerSelection === "papier" && computerSelection === "pierre")
  ) {
    console.log("Vous avez gagné!");
  } else {
    console.log("Vous avez perdu!");
  }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
  while (playRound < 5) {
    playRound++;
  }
}
