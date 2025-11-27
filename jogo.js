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
    }, 1);
}

startScore();

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 95 && pipePosition > 0 && marioPosition < 50) {

        clearInterval(scoreInterval);

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './media/game-over.png';
        mario.style.width = '45px';
        mario.style.marginLeft = '60px';

        clearInterval(loop);
    }
}, 10);
