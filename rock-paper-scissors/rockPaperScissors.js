let playerSelection = "";
let computerSelection = "";
let gamesWon = 0;
let gamesLost = 0;
let roundsPlayed = 0;

function getComputerSelection() {
    const min = Math.ceil(1);
    const max = Math.floor(3);
    const computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    switch (computerChoice) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
    }
    console.log(`The computer picked ${computerSelection}.`);
    return computerSelection;
}

function getPlayerSelection() {
    playerSelection = prompt("What will you throw?", "rock, paper, or scissors").toLowerCase();
    console.log(`You picked ${playerSelection}`)
}

function playRound(playerSelection, computerSelection) {
    roundsPlayed++;
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "rock")) {
        gamesWon++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if ((playerSelection === "scissors" && computerSelection === "rock") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "rock" && computerSelection === "paper")) {
        gamesLost++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
        console.log("It's a tie.");
    }
}

function getWinner() {
    if (gamesWon > gamesLost) {
        return "You won!"
    } else if (gamesLost > gamesWon) {
        return "You lost!"
    } else {
        return "It was a tie."
    }

}

function game() {
    for (let i = 0; i != 5; i++) {
        getPlayerSelection();
        getComputerSelection();
        playRound(playerSelection, computerSelection);
    }
    console.log(`${getWinner()} You played ${roundsPlayed}, you won ${gamesWon} and lost ${gamesLost}.`)
}