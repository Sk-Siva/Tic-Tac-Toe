let currentPlayer = 'X';
const board = document.getElementById('board');

// Create the board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.addEventListener('click', () => cellClick(i));
  board.appendChild(cell);
}

// Handle cell click
function cellClick(index) {
  const cell = board.children[index];
  if (cell.textContent === '' && !checkWinner()) {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
    } else if (isBoardFull()) {
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateTurnMessage();
    }
  }
}
// Update turn message
function updateTurnMessage() {
    const turnMessage = document.getElementById('current-player');
    turnMessage.textContent = currentPlayer;
  }
function checkWinner() {
  const cells = board.children;
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent;
  });
}

// Check if the board is full
function isBoardFull() {
  const cells = board.children;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
}
