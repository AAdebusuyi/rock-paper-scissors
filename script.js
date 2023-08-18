document.addEventListener("DOMContentLoaded", function () {
  // get all the choices

  const rockButton = document.querySelector(".rock");
  rockButton.addEventListener("click", () => {
    const userSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(userSelection);
    console.log(computerSelection);
    playRound(userSelection, computerSelection);
  });

  const paperButton = document.querySelector(".paper");
  paperButton.addEventListener("click", () => {
    const userSelection = "paper";
    const computerSelection = getComputerChoice();
    console.log(userSelection);
    console.log(computerSelection);
    playRound(userSelection, computerSelection);
  });

  const scissorsButton = document.querySelector(".scissors");
  scissorsButton.addEventListener("click", () => {
    const userSelection = "scissors";
    const computerSelection = getComputerChoice();
    console.log(userSelection);
    console.log(computerSelection);
    playRound(userSelection, computerSelection);
  });

  let myScore = 0;
  let computerScore = 0;

  //function to get user choice

  // function to get computer choice
  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choicesIndex = Math.floor(Math.random() * choices.length);
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
});
