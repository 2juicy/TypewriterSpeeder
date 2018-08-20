window.addEventListener("load", init);

// Global Variables

let time = 5;
let score = 0;
let inPlay;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

// Initialize Game
function init() {
  showWord(words);
  wordInput.addEventListener("input", startGame);
  setInterval(countdown, 1000);
  setInterval(checkState, 50);
}

// Starts Game
function startGame() {
  if (matchWords()) {
    isPlaying = true;
    // Set time to one above because page load = 1 seconds
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  scoreDisplay.innerHTML = score;
}

// Checks for correct word
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Randomizes and outputs word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Checks if user is out of time
  if (time > 0) {
    time--;
  } else if (time === 0) {
    inPlay = false;
  }
  timeDisplay.innerHTML = time;
}

// Game state
function checkState() {
  if (!inPlay && time === 0) {
    message.innerHTML = "Game Over!";
  }
}
