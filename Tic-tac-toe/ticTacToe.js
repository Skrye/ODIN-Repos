function gameBoard() {
    const board = [];

    const createBoard = (size) => {
        for (let i = 0; i < size; i++) {
            board.push([]);
            for (let j = 0; j < size; j++) {
                board[i].push(Cell());
            }
        }
        return board;
    }

    const getBoard = () => board;

    const placeMarker = (row, col, player) => {
        if (board[row][col].getValue() !== 0) {
            throw new Error('Cell is already occupied');
        }
        board[row][col].addToken(player);
    };

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues)
    }

    return { 
        createBoard,
        getBoard,
        placeMarker,
        printBoard 
    };
}

function Cell() {
    let value = 0;

    const addToken = (player) => {
        value = player;
    }

    const getValue = () => value;

    return {
        addToken,
        getValue 
    };
}

function GameController() {
    let playerOneName = 'Player One';
    let playerTwoName = 'Player Two';
    const board = gameBoard();
    board.createBoard(3);
    const ui = DOMController();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        console.log(`It's ${activePlayer.name}'s turn!`);
        board.printBoard();
    }

    const checkForWin = () => {
        const winningCombos = [
            // Rows
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Columns
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];
    
        for (const combo of winningCombos) {
            const values = combo.map(([row, col]) => board.getBoard()[row][col].getValue());
            if (values.every((value) => value === activePlayer.token)) {
                console.log(`${activePlayer.name} wins!`);
                ui.gameOver('win');
                return 'win';
            }
        }
    
        const isDraw = board.getBoard().every(row => row.every(cell => cell.getValue() !== 0));
        if (isDraw) {
            console.log("It's a draw!");
            ui.gameOver('draw');
            return 'draw';
        }
    };

    const playRound = (row, col) => {
        try {
            board.placeMarker(row, col, getActivePlayer().token);
            if (checkForWin() === 'win' || checkForWin() === 'draw') {
                return 'gameover';
            } else {
                switchPlayerTurn();
                printNewRound();
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const restartGame = () => {
        board.getBoard().forEach(row => {
            row.forEach(cell => {
                cell.addToken(0);
            });
        })
    };
    

    return { 
        players,
        switchPlayerTurn,
        getActivePlayer,
        printNewRound,
        playRound,
        restartGame
    };
}

function DOMController() {
    const board = document.getElementById('board');
    const cellElements = document.querySelectorAll('[data-cell]');
    // display current turn using game.getActiveplayer()
    const displayTurn = document.getElementById('currentTurn');
    // show name entry input on page load, hide and start first game on submit
    const enterNames = document.getElementById('enterPlayerNames');
    const startButton = document.getElementById('startGame');
    // enter player names with formdata; refer to library app SCRATCH THAT VALUES ARE EASIER
    const playerOneName = document.getElementById('player1NameInput');
    const playerTwoName = document.getElementById('player2NameInput');
    // show winner on game end (x/circle/draw) and hide on restart
    const winningMessage = document.getElementById('winningMessage');
    const winner = document.getElementById('winner');
    const restartButton = document.getElementById('restartButton');
    // show current player turn and update score when someone wins
    const playerOneScore = document.getElementById('player1Score');
    const playerOneNameDisplay = document.getElementById('player1Name');
    const playerTwoScore = document.getElementById('player2Score');
    const playerTwoNameDisplay = document.getElementById('player2Name');


    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        startGame(playerOneName, playerTwoName);
        playerOneNameDisplay.innerHTML = playerOneName.value;
        playerTwoNameDisplay.innerHTML = playerTwoName.value;
        enterNames.classList.toggle('show');
        game.printNewRound();
    });

    cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick);
    });

    function handleClick(e) {
        const cell = e.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        if (game.playRound(row, col) !== 'gameover' && cell.classList.length === 1) {
            cell.classList.add(game.getActivePlayer().token === 1 ? 'circle' : 'x');
            switchTurn();
        }
    }

    function startGame() {
        game.players[0].name = playerOneName.value;
        game.players[1].name = playerTwoName.value;
        board.classList.add('x');
    }

    function switchTurn() {
        // board.add(add x or circle based on active player)
        if (game.getActivePlayer().token ===  1) {
            board.classList.add('x');
            board.classList.remove('circle');
            displayTurn.classList.remove('circle');
            displayTurn.classList.add('x');
            displayTurn.innerHTML = `${game.getActivePlayer().name}'s turn`;
        } else {
            board.classList.remove('x');
            board.classList.add('circle');
            displayTurn.classList.remove('x');
            displayTurn.classList.add('circle');
            displayTurn.innerHTML = `${game.getActivePlayer().name}'s turn`;
        }
    }

    function gameOver(str) {
        if (str === 'win') {
            winner.innerHTML = `${game.getActivePlayer().name} wins!`;
            if (game.getActivePlayer().token === 1) {
                playerOneScore.innerHTML++;
            } else {
                playerTwoScore.innerHTML++;
            };
        } else if (str === 'draw') {
            winner.innerHTML = "It's a draw!";
        }
        winningMessage.classList.add('show');
        restartButton.classList.add('show');
        board.classList.remove('x', 'circle');
    }

    restartButton.addEventListener('click', () => {
        game.restartGame();
        game.printNewRound();
        winningMessage.classList.remove('show');
        restartButton.classList.remove('show');
        cellElements.forEach((cell) => {
            cell.classList.remove('x', 'circle');
        });
    });

    return {
        switchTurn,
        gameOver
    }
}

const game = GameController();