const wi = 20;
const hi = 20;
const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${wi}, 1fr)`;

const snake = [6, 5, 4, 3, 2, 1, 0];
let snakeHead  = snake[0];

function createBoard() {
    for (let i = 0; i< wi * hi; i++) {
        const div = document.createElement("div");
        div.innerHTML = i;
        board.appendChild(div);

    }
    snakeColor();
}

function snakeColor() {
    const divs = board.querySelectorAll('div');
    divs.forEach((div) => div.classList.remove("snake", "snakeHead"));
    snake.forEach((num) => divs[num].classList.add('snake'));
    divs[snakeHead].classList.add('snakeHead');

}

window.addEventListener("keydown",(event) => {
    event.preventDefault();
    switch(event.key){
        case "ArrowUp":
            Move('up')
        break;
        case "ArrowDown":
            Move('down')
        break;
        case "ArrowLeft":
            Move('left')
        break;
        case "ArrowRight":
            Move('right')
        break;
    }
    
})

function Move(dir) {
    if(dir ==="up") {
        snakeHead -= wi;
    }else if (dir === "down") {
        snakeHead += wi;
    }else if (dir === "left") {
        snakeHead --;
    }else if (dir === "right") {
        snakeHead ++
    }
    snakeColor();
}


createBoard();