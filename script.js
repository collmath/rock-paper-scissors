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

function playRound() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        console.log("It's a Tie! you both picked rock");
        return "tie"
    }else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats rock");
        return "lose"
    }else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        console.log("You Win! rock beats scissors");
        return "win"
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
        console.log("It's a Tie! you both picked paper");
        return "tie"
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        console.log("You Lose! scissors beats paper");
        return "lose"
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("You Win! paper beats rock");
        return "win"
    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        console.log("It's a Tie! you both picked scissors");
        return "tie"
    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        console.log("You Lose! Rock beats scissors");
        return "lose"
    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("You Win! scissors beats paper");
        return "win"
    }else{
        console.log("Something went wrong, did you make a correct selection?")
    }
}

function ask(){
    let x = prompt("How many rounds should we play?");
    return x;
}



function game(){
    let rounds = ask();
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let index = 0; index < rounds; index++) {
        let play = playRound();
        switch (play) {
            case "win":
                wins++;
                break;
            case "lose":
                losses++;
                break;
            case "tie":
                ties++;
                break;
        }
    }
    console.log("wins " + String(wins) + " Losses " + String(losses) + " Ties " + String(ties))
    if (wins > losses){
        console.log("You won!");
    }else if (losses > wins){
        console.log("You lost!");
    }else{
        console.log("Its a tie!")
    }
    
}
    





