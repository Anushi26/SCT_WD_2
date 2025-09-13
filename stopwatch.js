let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  running = false;
  clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  seconds = minutes = hours = 0;
  display.innerText = "00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (running) {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
  }
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}
