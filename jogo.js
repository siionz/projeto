const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.getElementById("score");

let score = 0;
let scoreInterval;

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 700);
    }
};

document.addEventListener('keydown', jump);
document.getElementById("jumpBtn").addEventListener("touchstart", jump);
document.getElementById("jumpBtn").addEventListener("click", jump);

function startScore() {
    score = 0;
    scoreInterval = setInterval(() => {
        score++;
        scoreElement.textContent = "high score: " + score;
    }, 10);
}

startScore();


let pipeX = window.innerWidth;  
let speed = 4;                  
let lastTime = 0;
let gameOver = false;

function movePipe(timestamp) {

    if (lastTime === 0) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    if (!gameOver) {

        pipeX -= speed * (delta / 16); 

        if (pipeX < -60) {
            pipeX = window.innerWidth;
        }

        pipe.style.left = pipeX + "px";

        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        if (pipeX <= 95 && pipeX > 0 && marioPosition < 50) {
            gameOver = true;

            clearInterval(scoreInterval);

            mario.style.animation = 'none';
            mario.src = './media/game-over.png';
            mario.style.width = '45px';
            mario.style.marginLeft = '60px';
        }
    }

    requestAnimationFrame(movePipe);
}

requestAnimationFrame(movePipe);

setInterval(() => {
    speed += 0.8;
}, 15000);
