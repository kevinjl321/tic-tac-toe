const boxes = document.querySelectorAll('.box');
const choiceX = document.getElementById("choice-x");
const choiceY = document.getElementById("choice-o");
const gameBoard = document.getElementById("game-board");
const gameContainer = document.getElementById("game-container");
const reset = document.getElementById("reset");
const restart = document.getElementById("restart");
const buttons = document.getElementById("buttons");

let p1Choice;
let p2Choice; 

let ctr = 0;
let box_arr = [''];

//functions
function move(item){
    ctr++;
    if(ctr % 2 !== 0){
        item.innerHTML = p1Choice;
        box_arr.push(p1Choice);
        checkWin();
    }
    else if (ctr % 2 === 0){
        item.innerHTML = p2Choice;
        box_arr.push(p2Choice);
        checkWin();
    }
}

function checkWin(){

}

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

//Event Listeners
boxes.forEach(item => {
    item.addEventListener('click', event =>{
        move(item);
    });
});

choiceX.addEventListener("click", event =>{
    p1Choice = 'X';
    p2Choice = 'O';
    activateGame();
});

choiceY.addEventListener("click", event =>{
    p2Choice = 'X';
    p1Choice = 'O';
    activateGame(); 
});

reset.addEventListener("click", activateGame);
restart.addEventListener("click", restartGame);

/*
To Do:
    1. Add a function that "turns off" event listeners for the box class after one click.
    2. Add additional functions that are needed, then organize into modules and factory functions.
*/