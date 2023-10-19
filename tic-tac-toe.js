document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => square.classList.add('square'));
    const playerX = 'X';
    const playerO = 'O';
    let xTurn = true;
    const status = document.getElementById('status');

    const wins = [
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    function checkForWin(symbol) {
        return wins.some(combo => {
            return combo.every(index => squares[index].classList.contains(symbol));
        });
    }

    newGameButton.addEventListener('click', function () {
        squares.forEach(square => {
            square.classList.remove(playerX);
            square.classList.remove(playerO);
            square.textContent = '';
            status.textContent = 'Move your mouse over a square and click to play an X or an O.';
            status.classList.remove('you-won');
        });
    });


    squares.forEach(square => {
        square.classList.add('square');

        square.addEventListener('click', function () {
            if (!square.classList.contains(playerX) && !square.classList.contains(playerO)) {
                if (xTurn) {
                    square.classList.add(playerX);
                    square.textContent = 'X';
                    if (checkForWin(playerX)) {
                        status.textContent = "Congratulations! X is the Winner!";
                        status.classList.add('you-won');
                    }
                } else {
                    square.classList.add(playerO);
                    square.textContent = 'O';
                    if (checkForWin(playerO)) {
                        status.textContent = "Congratulations! O is the Winner!";
                        status.classList.add('you-won');
                    }
                }
                xTurn = !xTurn;
            }
        });

        square.addEventListener('mouseover', function () {
            if (!square.classList.contains(playerX) && !square.classList.contains(playerO)) {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
        });
    });
});