let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const gameArea = document.getElementById('game-area');
const startBtn = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

startBtn.addEventListener('click', startGame);

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Skóre: ${score}`;
  timerDisplay.textContent = `Čas: ${timeLeft}`;
  startBtn.disabled = true;

  gameInterval = setInterval(spawnTarget, 800);
  timerInterval = setInterval(updateTimer, 1000);
}

function spawnTarget() {
  const target = document.createElement('div');
  target.classList.add('target');
  const size = Math.floor(Math.random() * 20) + 20; // 20-40px
  target.style.width = `${size}px`;
  target.style.height = `${size}px`;
  target.style.backgroundColor = randomColor();
  target.style.top = `${Math.random() * (gameArea.clientHeight - size)}px`;
  target.style.left = `${Math.random() * (gameArea.clientWidth - size)}px`;

  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Skóre: ${score}`;
    target.remove();
  });

  gameArea.appendChild(target);
  setTimeout(() => target.remove(), 1500);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Čas: ${timeLeft}`;
  if (timeLeft <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  startBtn.disabled = false;
  alert(`Konec hry! Skóre: ${score}`);
  gameArea.innerHTML = '';
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
