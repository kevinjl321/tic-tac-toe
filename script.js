//established event listener
let ctr = 0;

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', event =>{
        ctr++;
        if(ctr % 2 !== 0){
            item.innerHTML = 'X';
        }
        else{
            item.innerHTML = 'O';
        }
    });
});