const boxes = document.querySelectorAll('.box');
const choiceX = document.getElementById("choice-x");
const choiceY = document.getElementById("choice-o");
const gameBoard = document.getElementById("game-board");
const gameContainer = document.getElementById("game-container");

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
}

choiceX.addEventListener("click", activateGame);
choiceY.addEventListener("click", activateGame);

