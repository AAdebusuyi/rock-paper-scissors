let myScore = 0;
let computerScore = 0;

//loop for ten rounds in the game
for (let i = 0; i < 10; i++) {
  let userChoice = prompt("Enter a move: ").toLowerCase();
  console.log("you played: " + userChoice);
  playRound(userChoice, getComputerChoice());
  console.log("You scored: " + myScore);
  console.log("Computer scored: " + computerScore);
}

// function to get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choicesIndex = Math.floor(Math.random() * choices.length);
  console.log("Computer played: " + choices[choicesIndex]);
  return choices[choicesIndex];
}

// function to compare user selection against computer selection
function playRound(userSelection, computerSelection) {
  if (userSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (userSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock smashes scissors.");
    myScore++;
  } else if (userSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper covers rock.");
    myScore++;
  } else if (userSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors dices paper.");
    myScore++;
  } else if (userSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose! Rock smashes scissors.");
    computerScore++;
  } else if (userSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper covers rock.");
    computerScore++;
  } else if (userSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors dices paper.");
    computerScore++;
  } else {
    console.log("something is wrong");
  }
}
