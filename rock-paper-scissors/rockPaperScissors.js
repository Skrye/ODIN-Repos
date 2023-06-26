let playerSelection = "rock";
let computerSelection = "scissors";
let gamesWon = 0;
let gamesLost = 0;
let gamesPlayed = 0;

function getComputerSelection() {
    const min = Math.ceil(1);
    const max = Math.floor(3);
    const computerChoice = Math.floor(Math.random() * (max -min + 1) + min);
    switch (computerChoice) {
        case 1:
            computerSelection = "rock";
            console.log(computerSelection);
            break;
        case 2:
            computerSelection = "paper";
            console.log(computerSelection);
            break;
        case 3:
            computerSelection = "scissors";
            console.log(computerSelection);
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    gamesPlayed++;
    playerSelection = prompt("What will you throw?", "rock, paper, or scissors")
    getComputerSelection();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        gamesWon++;
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        gamesWon++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        gamesWon++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        gamesLost++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        gamesLost++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        gamesLost++;
        return "You Lose! Paper beats Rock";
    } else {
        return "It's a tie.";
    }
}

function game() {
    for (let i = 0; i != 5; i++) {
        console.log(playRound());
        if (gamesWon > gamesLost) {
            return "You won! Congratulations.";
        } else if (gamesWon < gamesLost) {
            return "You Lost! Better luck next time.";
        } else {
            return "It's a tie";
        }
    }
}