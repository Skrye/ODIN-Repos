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

function GameController(
    playerOneName = 'Player One',
     playerTwoName = 'Player Two'
) {
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

        winningCombos.forEach((combo) => {
            const values = combo.map(([row, col]) => board.getBoard()[row][col].getValue());
            if (values.every((value) => value === activePlayer.token)) {
                console.log(`${activePlayer.name} wins!`);
            } else if (values.every((value) => value !== 0)) {
                console.log("It's a draw!"); 
            }
        });
    };

    const playRound = (row, col) => {
        try {
            board.placeMarker(row, col, activePlayer.token);
            checkForWin();
            switchPlayerTurn();
            printNewRound();
        } catch (error) {
            console.error(error.message);
        }
    };

    printNewRound();

    return { 
        switchPlayerTurn,
        getActivePlayer,
        printNewRound,
        playRound,
    };
}

function DOMController() {
    const boardClassList = document.getElementByID('board');
    const cellElements = document.querySelectorAll('[data-cell]');
    // display current turn using game.getActiveplayer()
    const displayTurn = document.getElementByID('currentTurn');
    // show name entry input on page load, hide and start first game on submit
    const enterNames = document.getElementByID('enterPlayerNames');
    const startButton = document.getElementByID('startGame');
    // enter player names with formdata; refer to library app
    const playerOneName = document.getElementByID('player1');
    const playerTwoName = document.getElementByID('player2');
    // show winner on game end (x/circle/draw) and hide on restart
    const winningMessage = document.getElementByID('winningMessage');
    const restartButton = document.getElementByID('restartButton');

    cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
    });

    function handleClick(e) {
        const cell = e.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        game.playRound(row, col);
        switchTurn();
    }

    function switchTurn() {
        // board.add(add x or circle based on active player)
        
    }
}

const game = GameController();