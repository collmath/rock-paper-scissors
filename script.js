console.log("Hello World")

function getComputerChoice() {
    let rollDice = Math.random()
    if (rollDice < 0.3){
        return "rock";
    }else if (rollDice < 0.6){
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "It's a Tie! you both picked rock";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats rock";
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! rock beats scissors";
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It's a Tie! you both picked paper";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! scissors beats paper";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! paper beats rock";
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It's a Tie! you both picked scissors";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats scissors";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! scissors beats paper";
    }else{
        return "Something went wrong!?!?"
    }
}

const computerSelection = getComputerChoice();
let playerSelection = prompt("someting")

console.log(playerSelection)

console.log(playRound(playerSelection.toLowerCase(), computerSelection))