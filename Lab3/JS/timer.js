let timerElement = document.getElementById('timer');
let startButton = document.getElementById('startBtn');
let pauseButton = document.getElementById('pauseBtn');
let resetButton = document.getElementById('resetBtn');

let startTime;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
    const currentTime = new Date().getTime();
    const timeElapsed = new Date(currentTime - startTime + elapsedTime);
    timerElement.textContent = timeElapsed.toISOString().slice(11, -1);
}

startButton.addEventListener('click', function() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 10); // обновляем каждые 10 миллисекунд
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
});

pauseButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime += new Date().getTime() - startTime;
    startButton.disabled = false;
    pauseButton.disabled = true;
});

resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerElement.textContent = '00:00:00.000';
    elapsedTime = 0;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
});