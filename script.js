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

let userChoice = prompt("Enter a move: ");
console.log("you played: " + userChoice.toLowerCase());
console.log("Computer played: " + getComputerChoice());
playRound();

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choicesIndex = Math.floor(Math.random() * choices.length);
  //   console.log(choices[choicesIndex]);
  return choices[choicesIndex];
}

function playRound(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
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
  }
}

// function game() {
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();
// }
