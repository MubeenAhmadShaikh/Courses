'use strict';
// EventListeners
document.querySelector('.check').addEventListener('click', guessTheNumber);
document.querySelector('.again').addEventListener('click', reset);

// Elements
let msg = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let highScoreElement = document.querySelector('.highscore');
let guessElement = document.querySelector('.guess');
let hiddenNumber = document.querySelector('.number');
// Random number function
let randomNumber = function () {
  return Math.floor(Math.random() * 21);
};
// Declaring score and High score
let score = 20;
let highScore = 0;

// Function to display messages
function displayMessage(message) {
  msg.textContent = message;
}

// Guess the number on click function
function guessTheNumber() {
  let randNum = 5;
  console.log(randNum);
  let num = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  hiddenNumber.textContent = '?';
  if (!num) {
    displayMessage('β No number');
  } else if (randNum === num) {
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
    displayMessage('Correct Numberπ');
    document.querySelector('.number').textContent = randNum;
    document.querySelector('body').style.backgroundColor = 'Green';
  } else {
    if (score > 0) {
      score--;
      scoreElement.textContent = score;
      displayMessage(num < randNum ? 'Too Low π' : 'Too High π');
    } else {
      displayMessage('You lost');
      guess.textContent = guess.setAttribute('disabled', true);
    }
  }
}

// Reset function for play again button
function reset() {
  score = 20;
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  guessElement.value = '';
  hiddenNumber.textContent = '?';
  document.querySelector('.guess').style.display = 'block';
}
