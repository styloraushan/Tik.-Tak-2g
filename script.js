let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(cellIndex) {
    if (!gameOver && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        
        if (checkWin()) {
            displayMessage(currentPlayer + ' wins!');
            gameOver = true;
        } else if (gameBoard.indexOf('') === -1) {
            displayMessage('It\'s a draw!');
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block'; // Show the message
}

function newGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('message').style.display = 'none'; // Hide the message
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}

newGame(); // Initialize the game
