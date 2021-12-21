'use strict';

//Task1: Elements
const resetBtn = document.querySelector('.again');
const hiddenNumber = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');

//Task2 Eventlistener
checkBtn.addEventListener('click', guessNumber);
resetBtn.addEventListener('click', reset);

//Task3: Random Number generator between 0 - 20
const randNum = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let score = 20;
let highScore = 0;
let guessCount = 0;

function displayMessage(msg) {
  message.textContent = msg;
}
// Task4
function guessNumber() {
  if (score != 0) {
    //subtask 4.1
    let msg;
    let num = randNum();
    console.log(num);
    let guessValue = Number(guess.value);
    document.querySelector('body').style.backgroundColor = '#222';
    hiddenNumber.textContent = '?';
    if (!guessValue) {
      //Subtask 4.1.1
      displayMessage('⛔ Not a Number');
    } else if (guessValue === num) {
      //Subtask 4.1.2
      guessCount++;
      displayMessage('🎉 You got it!!');
      document.querySelector('body').style.backgroundColor = 'green';
      hiddenNumber.textContent = num;
      if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = score;
      }
    } else {
      //Subtask 4.1.3
      score--;
      scoreElement.textContent = score;
      displayMessage(guessValue > num ? '📈Too High' : '📉Too Low');
    }
  } else {
    //Subtask 4.2
    displayMessage(`🎊 Right Guesses: ${guessCount}`);
    guess.classList.add('hidden');
  }
}

//Task5
// Reset the game
function reset() {
  hiddenNumber.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing....');
  guess.classList.remove('hidden');
  guess.value = '';
  guessCount = 0;
  scoreElement.textContent = 20;
  score = 20;
}

// Task Details
/*
Task 1: Declare all the elements at the top and add use strict
Task 2: Add eventListeners for all the actions(its upto you)
Task 3: Create a function to generate the randome Number from 0-20
Task 4: Get the value from user and compare with random number and update the results
    Subtask: 4.1 - guessed value != 0
                    -Store random number in a variable
                    -convert the guessed value into Number
                    -Change the background color to grey
                    -Display '?' on hidden number
                Subtask: 4.1.1 - guessed value == empty or NaN
                    -Show the message 'not a number'
                Subtask: 4.1.2 - guessed value == random value
                    -Show the random number
                    -Increment the guess count by 1
                    -Change the background color
                    -Display Congratulation message
                    -if current score is greater than highscore then update the highscore
                Subtask: 4.1.3 - (else part) guessed value != empty or NaN
                    - guessed value>random number then show message 'Too High' or else 'Too Low'
                    -Decrement the score by 1
                    -update the score
    Subtask: 4.2 - guessed value == 0
                    -Show the count of right guesses
                    -Remove the check button so user is not able to guess again
Task 5: Reset the game
    -set the '?' to hidden number
    -change the color of bg to grey
    -update the message to 'start guessing...'
    -show the check button
    -empty the text field
    -set the guess count to 0
    -set the score to 0 and score element to 20

*/
