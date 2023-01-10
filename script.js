"use strict";

/* 
// Getting the content of a selected element using querySelector and textContent
console.log(document.querySelector(".message").textContent);

// Changing an existing text content
// This is an example of DOM manipulation
document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// Setting the value for an input field using the ".value" property
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); 
*/

// Defining a secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// Defining a score for the game.
// This variable can also be called a "state variable".
// Because this score is part of the application state
// meaning that data that is relevant to the application.
let score = 20;

///// Handling Click Events /////
// 1. Selected an element using the querySelector.
// 2. Used an addEventListener method on that element to attach an event handler.
// 3. The event handler is a function expression, therefore, we can use the function as a parameter
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Implementing the game logic
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number! ";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
