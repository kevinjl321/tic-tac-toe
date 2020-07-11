const boxes = document.querySelectorAll('.box');
const choiceX = document.getElementById("choice-x");
const choiceY = document.getElementById("choice-o");
const gameBoard = document.getElementById("game-board");
const gameContainer = document.getElementById("game-container");
const reset = document.getElementById("reset");
const restart = document.getElementById("restart");

let p1Choice;
let p2Choice; 

let ctr = 0;
let box_arr = [''];

//functions
function move(item){
    ctr++;
    if(ctr % 2 !== 0){
        item.innerHTML = 'X';
    }
    else if(ctr % 2 === 0){
        item.innerHTML = 'O';
    }
}

function clearBoard(){
    boxes.forEach(item =>{
        item.textContent = '';
    })
}

function startGame(){
    gameBoard.style.display = 'none';
    gameContainer.style.display = 'flex';

    if(p1Choice === 'X'){
        p2Choice = 'O';
    }
    else{
        p2Choice = 'X';
    }

    clearBoard();
}

//event listeners
boxes.forEach(item => {
    item.addEventListener('click', event =>{
        move(item);
    });
});

reset.addEventListener("click", clearBoard);

/*
To Do:
    1. Add a function that "turns off" event listeners for the box class after one click.
    2. Add additional functions that are needed, then organize into modules and factory functions.
*/