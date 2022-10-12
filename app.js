const choices = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

console.log(getComputerChoice());
