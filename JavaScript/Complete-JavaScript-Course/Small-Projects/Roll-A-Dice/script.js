'use strict';

// Elements
let current0Element = document.querySelector('#current--0');
let current1Element = document.querySelector('#current--1');
let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let diceElement = document.querySelector('.dice');
let player0Element = document.querySelector('.player--0');
let player1Element = document.querySelector('.player--1');

// Buttons
let newBtn = document.querySelector('.btn--new');
let holdBtn = document.querySelector('.btn--hold');
let rollBtn = document.querySelector('.btn--roll');

//Intialization before starting the game
let scores, activePlayer, isPlaying, currentScore;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

init();
const switchPlayer = function () {
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};
// Rolling dice function
rollBtn.addEventListener('click', function () {
  if (isPlaying) {
    let dice = Math.trunc(Math.random() * 6) + 1;

    // Displaying the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `images/dice-${dice}.png`;

    // To check the rolled dice
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// Hold Functionality
holdBtn.addEventListener('click', function () {
  if (isPlaying) {
    // 1. Add current score to the active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if the player's score is >=100

    if (scores[activePlayer] >= 30) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 4. Switch the player
      switchPlayer();
    }
    // 3. Finish the game
  }
});

newBtn.addEventListener('click', init);

//Rules
let modal = document.querySelector('.modal');
let rulesBtn = document.querySelector('.rules');
let closeBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

rulesBtn.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
