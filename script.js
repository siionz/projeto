const player = document.getElementById("player");

let x = 50;           // posição horizontal do personagem
let speed = 5;        // velocidade de movimento
let movingLeft = false;
let movingRight = false;
let jumping = false;

// ===== LOOP DE MOVIMENTO =====
setInterval(() => {
  if (movingLeft) x -= speed;
  if (movingRight) x += speed;

  player.style.left = x + "px";
}, 20); // ~50 FPS



// ===== BOTÃO ESQUERDA =====
const leftBtn = document.getElementById("left");

// PC
leftBtn.onmousedown = () => movingLeft = true;
leftBtn.onmouseup = () => movingLeft = false;
leftBtn.onmouseleave = () => movingLeft = false;

// Celular
leftBtn.ontouchstart = () => movingLeft = true;
leftBtn.ontouchend = () => movingLeft = false;



// ===== BOTÃO DIREITA =====
const rightBtn = document.getElementById("right");

// PC
rightBtn.onmousedown = () => movingRight = true;
rightBtn.onmouseup = () => movingRight = false;
rightBtn.onmouseleave = () => movingRight = false;

// Celular
rightBtn.ontouchstart = () => movingRight = true;
rightBtn.ontouchend = () => movingRight = false;



// ===== BOTÃO PULAR =====
const jumpBtn = document.getElementById("jump");

jumpBtn.onclick = () => {
  if (jumping) return;

  jumping = true;
  player.style.transition = "0.3s";
  player.style.bottom = "80px";

  setTimeout(() => {
    player.style.bottom = "0px";
    jumping = false;
  }, 300);
};
