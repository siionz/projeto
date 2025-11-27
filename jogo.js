const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.getElementById("score");

let score = 0;
let scoreInterval;
let loop;
const START_DELAY = 1000; 

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

document.addEventListener('keydown', jump);
document.getElementById("jumpBtn").addEventListener("touchstart", jump);
document.getElementById("jumpBtn").addEventListener("click", jump);


pipe.style.animation = 'none';

function startScore() {
    score = 0;

    scoreInterval = setInterval(() => {
        score++;
        scoreElement.textContent = "high score: " + score;
    }, 1);
}


setTimeout(() => {
    pipe.style.animation = '';

    startScore();

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 98 && pipePosition > 0 && marioPosition < 60) {

            clearInterval(scoreInterval);

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './media/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
        }
    }, 10);

}, START_DELAY);
