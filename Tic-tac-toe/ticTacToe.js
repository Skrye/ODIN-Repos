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

    function startGame() {
        players[0].name = ui.playerOneName.value;
        players[1].name = ui.playerTwoName.value;
        ui.board.classList.add('x');
    }

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
            board.placeMarker(row, col, activePlayer.token);
            const result = checkForWin();
            if (result === 'win' || result === 'draw') {
                return;
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
        ui.cellElements.forEach((cell) => {
            cell.classList.remove('x', 'circle');
        });
        ui.board.classList.remove('x', 'circle');
        ui.switchTurn();
        ui.enterNames.classList.add('show');
        ui.winningMessage.classList.remove('show');
        ui.restartButton.classList.remove('show');
        }
    };

    return { 
        startGame,
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
    // enter player names with formdata; refer to library app
    const playerOneName = document.getElementById('player1');
    const playerTwoName = document.getElementById('player2');
    // show winner on game end (x/circle/draw) and hide on restart
    const winningMessage = document.getElementById('winningMessage');
    const winner = document.getElementById('winner');
    const restartButton = document.getElementById('restartButton');

    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        game.startGame(playerOneName, playerTwoName);
        enterNames.classList.toggle('show');
    });

    cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
    });

    function handleClick(e) {
        const cell = e.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        game.playRound(row, col);
        cell.classList.add(game.getActivePlayer().token === 1 ? 'circle' : 'x');
        switchTurn();
    }

    function switchTurn() {
        // board.add(add x or circle based on active player)
        if (game.getActivePlayer().token ===  1) {
            board.classList.add('x');
            board.classList.remove('circle');
            displayTurn.classList.remove('circle');
            displayTurn.classList.add('x');
        } else {
            board.classList.remove('x');
            board.classList.add('circle');
            displayTurn.classList.remove('x');
            displayTurn.classList.add('circle');
        }
    }

    function gameOver(str) {
        if (str === 'win') {
            winner.innerHTML = `${game.getActivePlayer().name} wins!`;
        } else if (str === 'draw') {
            winningMessage.innerText = "It's a draw!";
        }
        winningMessage.classList.add('show');
        restartButton.classList.add('show');
    }

    restartButton.addEventListener('click', () => {
        game.restartGame();
    });

    return {
        board,
        playerOneName,
        playerTwoName,
        enterNames,
        winningMessage,
        restartButton,
        cellElements,
        switchTurn,
        gameOver
    }
}

const game = GameController();