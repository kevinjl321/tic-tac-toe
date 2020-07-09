const boxes = document.querySelectorAll('.box');
const choiceX = document.getElementById("choice-x");
const choiceY = document.getElementById("choice-o");
const gameBoard = document.getElementById("game-board");
const gameContainer = document.getElementById("game-container");
const reset = document.getElementById("reset");
const restart = document.getElementById("restart");
const buttons = document.getElementById("buttons");

let ctr = 0;
let box_arr = [''];

boxes.forEach(item => {
    item.addEventListener('click', event =>{
        ctr++;
        if(ctr % 2 !== 0){
            item.innerHTML = 'X';
            box_arr.push('X')
        }
        else{
            item.innerHTML = 'O';
            box_arr.push('O');
        }
    });
});

function activateGame(){
    gameContainer.style.display = 'none';
    gameBoard.style.display = 'flex';

    boxes.forEach(item =>{
        item.textContent = '';
    })

    buttons.style.display = 'flex';
}

function restartGame(){
    gameContainer.style.display = 'flex';
    gameBoard.style.display = 'none';
}

choiceX.addEventListener("click", activateGame);
choiceY.addEventListener("click", activateGame);

reset.addEventListener("click", activateGame);
restart.addEventListener("click", restartGame);

/*
To Do:
    1. Add a function that "turns off" event listeners for the box class after one click.
    2. Add a function that checks for a win every move.
    3. Add additional functions that are needed, then organize into modules and factory functions.
*/