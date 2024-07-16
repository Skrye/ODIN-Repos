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
            throw new Error("Cell is already occupied");
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
    playerOneName = "Player One",
     playerTwoName = "Player Two"
) {
    const board = gameBoard();
    board.createBoard(3);

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

const game = GameController();