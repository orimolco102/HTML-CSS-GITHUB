const wi = 20;
const hi = 20;
const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${wi}, 1fr)`;

const snake = [6, 5, 4, 3, 2, 1, 0];
let snakeHead  = snake[0];
let direction = 'right';
let isGameOver = false;
let random;
let score = 0;
document.querySelector('.scoreBoard').innerHTML = `Score: ${score}`;

let leftB = [];
for(let i=20;i<400;i+=20){
leftB[i] =i;
}

let rightB = [];
for(let i=19;i<400;i+=20){
rightB[i] =i;
}


function createBoard() {
    for (let i = 0; i< wi * hi; i++) {
        const div = document.createElement("div");
        // div.innerHTML = i;
        board.appendChild(div);

    }
    snakeColor();
    setRandom();
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

    if(isGameOver == true) {
        return;
    }
    const divs = board.querySelectorAll('div');

    if(dir ==="up") {
        if(direction === 'down') {
            return;
        }
        snakeHead -= wi;
        if(!divs[snakeHead]) {
            gameOver()
        }
    }else if (dir === "down") {
        if(direction === "up") {
            return;
        }
        snakeHead += wi;
        if(!divs[snakeHead]) {
            gameOver()
        }
    }else if (dir === "left") {
        if(direction === "right"){
            return;
        }if(leftB.includes(snakeHead)) {
            gameOver()
        } snakeHead --;
    }else if (dir === "right") {
        if(direction === "left"){
            return;
        }if(rightB.includes(snakeHead)) {
            gameOver()
        } snakeHead ++
    }


    if(snake.includes(snakeHead)) {
        gameOver()
    }

    direction = dir;
    snake.unshift(snakeHead);
    if(random === snakeHead){
        sound('snakeEat.mp3');
        setRandom();
        scoreBoard();
    }else{
        snake.pop();
    }

    snakeColor();
    startAuto();

}

let interval;

function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => Move(direction), 200);
}

function setRandom() {
    random = Math.floor(Math.random() * wi * hi);
    if (snake.includes(random)) {
        setRandom();
    }else {
        const divs = board.querySelectorAll('div');
        divs.forEach((div) => div.classList.remove('apple'));
        divs[random].classList.add('apple');
    }
}

function gameOver() {
    isGameOver = true;
    sound('gameOver.mp3');
    alert("GAME OVER");
    setTimeout(()=>{},200);
    location.reload();
    return;
}

function sound(src) {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.volume = 0.5;
    audio.play();
}

function scoreBoard() {
    if(snake.length >= 8) {
        score+=1;
    }
    // console.log(score);
    document.querySelector('.scoreBoard').innerHTML = `Score: ${score}`;
    
}

createBoard();