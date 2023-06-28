let playerSelection = "";
let computerSelection = "";
let gamesWon = 0;
let gamesLost = 0;
let roundsPlayed = 0;

const winTally = document.getElementById("gamesWon");
const lossTally = document.getElementById("gamesLost");

const throwRock = document.getElementById("rock");
throwRock.addEventListener("click", function(){getPlayerSelection("rock")});

const throwPaper = document.getElementById("paper");
throwPaper.addEventListener("click", function(){getPlayerSelection("paper")});

const throwScissors = document.getElementById("scissors");
throwScissors.addEventListener("click", function(){getPlayerSelection("scissors")});

const log = document.getElementById("log");

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
    log.innerHTML += ` The computer picked ${computerSelection}.<br>`;
    return computerSelection;
}

function getPlayerSelection(string) {
    playerSelection = string;
    log.innerHTML += `You picked ${playerSelection}.`;
    getComputerSelection();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    roundsPlayed += 1;
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "rock")) {
        gamesWon++;
        winTally.innerHTML = gamesWon;
        log.innerHTML += `You win! ${playerSelection} beats ${computerSelection}.<br><br>`;
    } else if ((playerSelection === "scissors" && computerSelection === "rock") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "rock" && computerSelection === "paper")) {
        gamesLost++;
        lossTally.innerHTML = gamesLost;
        log.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}.<br><br>`;
    } else {
        log.innerHTML += "It's a tie.<br><br>";
    }
    if (gamesWon === 5 || gamesLost === 5) {
        getWinner();
    }
}

function getWinner() {
    if (gamesWon > gamesLost) {
        log.innerHTML += `You won! Congratulations!<br>
        Play Again? <button id="playAgainYes">Yes</button> <button id="playAgainNo">No</button><br>`;
    } else {
        log.innerHTML += `You lost! Better luck next time.<br>
        Play Again? <button id="playAgainYes">Yes</button> <button id="playAgainNo">No</button><br>`;
        var playAgainYes = document.getElementById("playAgainYes");
        var playAgainNo = document.getElementById("playAgainNo");

        playAgainYes.addEventListener("click", function(){playAgain("yes")});
        playAgainNo.addEventListener("click", function(){playAgain("no")});
    }
}

function playAgain(string) {
    if (string === "yes") {
        playerSelection = "";
        computerSelection = "";
        gamesWon = 0;
        gamesLost = 0;
        roundsPlayed = 0;
        log.innerHTML = ``;
    } else {
        log.innerHTML += `Have a nice day!`;
    }
}

/* logic to play a five-round game without event listener
function game() {
    for (let i = 0; i != 5; i++) {
        getPlayerSelection();
        getComputerSelection();
        playRound(playerSelection, computerSelection);
    }
    console.log(`${getWinner()} You played ${roundsPlayed}, you won ${gamesWon} and lost ${gamesLost}.`)
}
*/