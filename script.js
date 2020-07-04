//established event listener
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', event =>{
        item.innerHTML = 'X';
    });
});