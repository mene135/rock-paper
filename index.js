const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const youScore = document.querySelector("#youScore");
const computerScore = document.querySelector("#computerScore")
const comment = document.querySelector("#comment");
const resetButton = document.createElement("button");
resetButton.style.color = "black";
resetButton.style.width = "60px";
resetButton.style.height = "40px";
resetButton.style.backgroundColor = "white";
resetButton.style.fontSize = "15px";
resetButton.style.fontWeight = "bold";
resetButton.style.fontFamily = "sans-serif";
resetButton.textContent = "Reset";
const container = document.querySelector("#container")
console.log("hello world")

let result = "";
let playerSelection = "";
let playerCount = 0;
let computerCount = 0;
const youWin = /^YOU WIN/i ;
const youLose = /^YOU LOSE/i ;

function pointGiver(result) {
  if(youWin.test(result) === true) {
    playerCount += 1;
  } else if(youLose.test(result)) {
    computerCount += 1;
  }
  youScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;
}

rock.addEventListener("click", rockClickHandler)

function rockClickHandler() {
    playerSelection = "rock"
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    comment.textContent = `${result}`;
    pointGiver(result);
    endOfGame(playerCount, computerCount)
}

paper.addEventListener("click", paperClickHandler)

function paperClickHandler() {
    playerSelection = "paper";
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    comment.textContent = `${result}`;
    pointGiver(result);
    endOfGame(playerCount, computerCount)
}

scissors.addEventListener("click", scissorsClickHandler)

function scissorsClickHandler() {
    playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    comment.textContent = `${result}`;
    pointGiver(result);
    endOfGame(playerCount, computerCount)
}

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") ) {
            return "Player";
        } else {
            return "computer";
        }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if(result == "Tie"){
        return "It's a Tie!"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function endOfGame (playerCount, computerCount) {
    if(playerCount === 5) {
    comment.textContent = "YOU WON THE GAME!"
    rock.removeEventListener("click", rockClickHandler);
paper.removeEventListener("click", paperClickHandler);
scissors.removeEventListener("click", scissorsClickHandler);resetButton.textContent = "Reset";
container.appendChild(resetButton);
} else if(computerCount === 5) {
    comment.textContent = "YOU HAVE LOST THE GAME!"
    rock.removeEventListener("click", rockClickHandler);
paper.removeEventListener("click", paperClickHandler);
scissors.removeEventListener("click", scissorsClickHandler);
resetButton.textContent = "Reset";
container.appendChild(resetButton);
}
}



resetButton.addEventListener("click", reset)


function reset() {
    playerCount = 0;
    computerCount = 0;
    youScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;  
  rock.addEventListener("click", rockClickHandler);
  paper.addEventListener("click", paperClickHandler);
  scissors.addEventListener("click", scissorsClickHandler);
}












