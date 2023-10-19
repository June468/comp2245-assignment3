document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => square.classList.add('square'));
    const playerX = 'X';
    const playerO = 'O';
    let xTurn = true;

    squares.forEach(square => {
        square.classList.add('square');
        square.addEventListener('click', function () {
            if (!square.classList.contains(playerX) && !square.classList.contains(playerO)) {
                if (xTurn) {
                    square.classList.add(playerX);
                    square.textContent = 'X';
                } else {
                    square.classList.add(playerO);
                    square.textContent = 'O';
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