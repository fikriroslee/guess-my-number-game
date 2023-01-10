"use strict";

// Defining a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Defining a score for the game.
// This variable can also be called a "state variable".
// Because this score is part of the application state
// meaning that data that is relevant to the application.
let score = 20;

// Defining a highscore variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

///// Handling Click Events /////
// 1. Selected an element using the querySelector.
// 2. Used an addEventListener method on that element to attach an event handler.
// 3. The event handler is a function expression, therefore, we can use the function as a parameter
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Implementing the game logic
  if (!guess) {
    displayMessage("⛔ No number! ");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct number!");

    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// An event handler to reset the game back to its original state
document.querySelector(".again").addEventListener("click", function () {
  // Restoring the score to its initial value
  // and initialising a new random number for the secretNumber variable
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset text
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");

  // Reset styles
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
