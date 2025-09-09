// --- Friend Counter ---
let count = 0;
const max = 5;
const friendBtn = document.getElementById('friendBtn');
const friendCount = document.getElementById('friendCount');

friendBtn.addEventListener('click', () => {
  count++;
  if (count > max) count = 0; // reset after max
  friendCount.textContent = "Real Friends: " + count;
});

// --- Music Toggle ---
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "Play Music";
  } else {
    bgMusic.play();
    musicBtn.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});

// --- Step Counter ---
const maxStep = 10;
let step = 0;
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const messagePrg = document.getElementById("messagePrg");

nextBtn.addEventListener("click", () => {
    step++;
    if (step < maxStep) {
    progress.textContent = "Step: " + step + "/" + maxStep;
    } else if (step === maxStep) {
    progress.textContent = "Step: " + step + "/" + maxStep;
    messagePrg.textContent = "Did you saw that 90% was just the path, not the goal?";
    nextBtn.disabled = true; // Button deaktivieren, da Ziel erreicht
    }
});