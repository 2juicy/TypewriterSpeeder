window.addEventListener("load", init);

// Global Variables

let delay = 5;
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

// Starts Game
function init() {
  showWord(words);
  setInterval(countdown, 1000);
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
