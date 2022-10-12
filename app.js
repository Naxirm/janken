const choices = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

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

function game() {
  let round = 0;
  while (round < 5) {
    let playerSelection = prompt("Pierre papier ou ciseaux?");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    round++;
  }
}

game();
