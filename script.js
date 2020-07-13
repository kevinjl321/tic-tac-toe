const gameBoard = (() => {
    let fieldsInGrid = [];
    for (let i = 0; i < 9; i++) {
        fieldsInGrid[i] = '';
    }

    const render = () => {
        let fieldCanvas = document.getElementsByClassName('field');
        for (let i = 0; i < fieldsInGrid.length; i++) {
            fieldCanvas[i].innerHTML = fieldsInGrid[i];
        }
    }

    let announcement = document.getElementById('announcement');
    const announceWinner = (player) => {
        if (!player) {
            announcement.textContent = 'It\'s a tie!';
        }
        else {
            announcement.textContent = `${player.name} wins!`;
            player.score++;
        }
    }
    const updatePlayerName = (e) => {
        if (e.id === 'playerOne') {
            player1.name = prompt('Type a new name');
            e.innerHTML = player1.name;
        }
        else if (e.id === 'playerTwo') {
            player2.name = prompt('Type a new name');
            e.textContent = player2.name;
        }
    }

    return {
        fieldsInGrid,
        render,
        announceWinner,
        updatePlayerName,
        announcement
    };
})();

const gameFlow = (() => {
    let gameIsOver = false;

    const switchGameState = () => {
        if (gameIsOver === false) {
            gameIsOver = true;
        }
        else {
            gameIsOver = false;
        }
    }

    const placeMarker = (e) => {
        if (!e.innerHTML && gameIsOver === false) {
                let dataIndex = e.getAttribute('data-index-number');
                if (player1.isPlaying) {
                    gameBoard.fieldsInGrid[dataIndex] = 'X';
                    player1.winTracker.push(dataIndex);
                }
                else {
                    gameBoard.fieldsInGrid[dataIndex] = 'O';
                    player2.winTracker.push(dataIndex);
                }
                gameBoard.render();
                swapTurn(player1, player2);
                winCondition(player1.winTracker, player2.winTracker);
                highlightPlayerName();
        }
    }

    const swapTurn = (player1, player2) => {
        if (player1.isPlaying === true) {
            player1.isPlaying = false;
            player2.isPlaying = true;
        }
        else {
            player1.isPlaying = true;
            player2.isPlaying = false;
        }
    }

    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');

    const winCondition = (tracker1, tracker2) => {
        if (tracker1.includes('0') && tracker1.includes('1') && tracker1.includes('2') ||
            tracker1.includes('3') && tracker1.includes('4') && tracker1.includes('5') ||
            tracker1.includes('6') && tracker1.includes('7') && tracker1.includes('8') ||
            tracker1.includes('0') && tracker1.includes('3') && tracker1.includes('6') ||
            tracker1.includes('1') && tracker1.includes('4') && tracker1.includes('7') ||
            tracker1.includes('2') && tracker1.includes('5') && tracker1.includes('8') ||
            tracker1.includes('0') && tracker1.includes('4') && tracker1.includes('8') ||
            tracker1.includes('2') && tracker1.includes('4') && tracker1.includes('6')
        ) {
            switchGameState(gameIsOver);
            gameBoard.announceWinner(player1);
            score1.textContent = `score: ${player1.score}`;

            player1.isPlaying = false;
            player2.isPlaying = true;
        }
        else if (tracker2.includes('0') && tracker2.includes('1') && tracker2.includes('2') ||
              tracker2.includes('3') && tracker2.includes('4') && tracker2.includes('5') ||
              tracker2.includes('6') && tracker2.includes('7') && tracker2.includes('8') ||
              tracker2.includes('0') && tracker2.includes('3') && tracker2.includes('6') ||
              tracker2.includes('1') && tracker2.includes('4') && tracker2.includes('7') ||
              tracker2.includes('2') && tracker2.includes('5') && tracker2.includes('8') ||
              tracker2.includes('0') && tracker2.includes('4') && tracker2.includes('8') ||
              tracker2.includes('2') && tracker2.includes('4') && tracker2.includes('6')
        )  {
            switchGameState(gameIsOver);
            gameBoard.announceWinner(player2);
            score2.textContent = `score: ${player2.score}`;

            player1.isPlaying = true;
            player2.isPlaying = false;
        }
        else if (!gameBoard.fieldsInGrid.includes('')) {
            switchGameState(gameIsOver);
            gameBoard.announceWinner();
        }
    }

    const nextRound = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard.fieldsInGrid[i] = '';
        }
        gameBoard.render();
        player1.winTracker = [];
        player2.winTracker = [];
        gameIsOver = false;
        gameBoard.announcement.textContent = '';
        highlightPlayerName();
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard.fieldsInGrid[i] = '';
        }
        gameBoard.render();
        player1.winTracker = [];
        player2.winTracker = [];
        gameIsOver = false;
        gameBoard.announcement.textContent = '_';

        player1.score = 0;
        player2.score = 0;

        player1.isPlaying = true;
        player2.isPlaying = false;

        score1.textContent = `score: ${player1.score}`;
        score2.textContent = `score: ${player2.score}`;
        highlightPlayerName();
    }

    let player1Node = document.getElementById('player1');
    let player2Node = document.getElementById('player2');
    const highlightPlayerName = () => {
        if (player1.isPlaying) {
            player1Node.style.backgroundColor = 'rgb(255, 77, 45)';
            player2Node.style.backgroundColor = 'transparent';
        }
        else if (player2.isPlaying) {
            player1Node.style.backgroundColor = 'transparent';
            player2Node.style.backgroundColor = 'rgb(255, 77, 45)';
        }
    }

    return {
        placeMarker,
        nextRound,
        reset,
        highlightPlayerName,
        player1Node,
        player2Node
    };
})();

const Player = (name, marker, isPlaying) => {
    let winTracker = [];
    let score = 0;
    return {name, marker, isPlaying, winTracker, score}
};

const player1 = Player('Player 1', 'X', true);
const player2 = Player('Player 2', 'O', false);
gameFlow.highlightPlayerName();