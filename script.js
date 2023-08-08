/* 
console based Rock, Paper, Scissors Game.
1. Enter a move.
2. get computer's move.
3. if we play same move, it's a draw.
4. else compare moves.
5. Rock beats sccisors.
6. Scissors beats paper.
7. Paper beats rock.
8. include option to play another round.
9. else quit and come back next time.
*/

const userChoice = prompt("Enter a move: ").toLowerCase();
console.log("you played: " + userChoice);
console.log("Computer played: " + getComputerChoice());
playRound(userChoice, getComputerChoice());

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choicesIndex = Math.floor(Math.random() * choices.length);
  //   console.log(choices[choicesIndex]);
  return choices[choicesIndex];
}

function playRound(userSelection, computerSelection) {
  if (userSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (userSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock smashes paper.");
  } else if (userSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper covers rock.");
  } else if (userSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors dices paper.");
  } else if (userSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose! Rock smashes paper.");
  } else if (userSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper covers rock.");
  } else if (userSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors dices paper.");
  } else {
    console.log("something is wrong");
  }
  console.log(userChoice + ", " + getComputerChoice());
}
