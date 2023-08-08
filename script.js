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

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choicesIndex = Math.floor(Math.random() * choices.length);
  return choices[choicesIndex];
  console.log(choices[choicesIndex]);
}

console.log("Computer played: " + getComputerChoice());

function playRound(userSelection, computerSelection) {
  var userSelection = userChoice;
  var computerSelection = getComputerChoice;
  console.log(playRound(userSelection, computerSelection));
}
