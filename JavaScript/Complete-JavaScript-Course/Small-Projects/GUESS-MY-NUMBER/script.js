'use strict';
// EventListeners
document.querySelector('.check').addEventListener('click', guessTheNumber);
document.querySelector('.again').addEventListener('click', reset);

// Elements
let msg = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let highScoreElement = document.querySelector('.highscore');
let guessElement = document.querySelector('.guess');

// Random number function
let randomNumber = function () {
  return Math.floor(Math.random() * 21);
};
// Declaring score and High score
let score = 20;
let highScore = 0;

// Guess the number on click function
function guessTheNumber() {
  let randNum = 5;
  console.log(randNum);
  let num = Number(document.querySelector('.guess').value);
  if (!num) {
    msg.textContent = '⛔ No number';
  } else if (randNum === num) {
    highScore = score;
    highScoreElement.textContent = highScore;
    msg.textContent = 'Correct Number🎊';
    document.querySelector('.number').textContent = randNum;
    document.querySelector('body').style.backgroundColor = 'Green';
  } else {
    if (score > 1) {
      score--;
      scoreElement.textContent = score;
      if (num < randNum) {
        msg.textContent = 'Too Low 📉';
      } else {
        msg.textContent = 'Too High 📈';
      }
    } else {
      msg.textContent = 'You lost';
      document.querySelector('.guess').style.display = 'none';
    }
  }
}

// Reset function for play again button
function reset() {
  score = 20;
  msg.textContent = 'Start guessing...';
  scoreElement.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  guessElement.value = '';
}
