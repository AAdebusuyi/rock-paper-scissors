document.addEventListener("DOMContentLoaded", function () {
  // starting scores:
  let myScore = 0;
  let computerScore = 0;

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
      myScore++;
      computerScore;
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

    //scoring
    const para1 = document.querySelector(".para1");
    para1.textContent = `Your Score is ${myScore}`;

    const para2 = document.querySelector(".para2");
    para2.textContent = `Computer's Score is ${computerScore}`;

    if (myScore >= 5) {
      const winner = document.querySelector(".winner");
      winner.textContent = `Your Score is ${myScore}, You Win!`;
    } else if (computerScore >= 5) {
      winner.textContent = `Your Score is ${myScore}, You Lost lol!`;
    }
  }
});
