"use strict";

// Elements
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const resultEl = document.getElementById("result");

// Global variables
let userScore = 0;
let compScore = 0;

// Functions
const getCompChoice = function () {
  const weapons = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * 3);
  const randomChoice = weapons[randomNumber];
  return randomChoice;
};

const getResult = function (userChoice, compChoice) {
  if (userChoice === "rock") {
    if (compChoice === "rock") {
      return "Draw";
    } else if (compChoice === "paper") {
      return "Lost";
    } else if (compChoice === "scissors") {
      return "Won";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      return "Won";
    } else if (compChoice === "paper") {
      return "Draw";
    } else if (compChoice === "scissors") {
      return "Lost";
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "rock") {
      return "Lost";
    } else if (compChoice === "paper") {
      return "Won";
    } else if (compChoice === "scissors") {
      return "Draw";
    }
  }
};

const updateScores = function (result, userChoice, compChoice) {
  if (result === "Won") {
    userScore++;
    userScoreEl.innerText = userScore;
    resultEl.innerText = "You Won";
  } else if (result === "Lost") {
    compScore++;
    compScoreEl.innerText = compScore;
    resultEl.innerText = "You Lost";
  } else if (result === "Draw") {
    resultEl.innerText = "Game Draw";
  }
  userChoiceEl.innerText = `You choose ${userChoice.toUpperCase()}`;
  compChoiceEl.innerText = `Comp choose ${compChoice.toUpperCase()}`;

  // Check if either user or computer has reached a score of 10
  if (userScore === 10) {
    showWinner("You");
  } else if (compScore === 10) {
    showWinner("Computer");
  }
};

const showWinner = function (winner) {
  // Disable the weapon buttons
  const buttons = document.getElementsByClassName("btn-weapon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  // Display the winner
  resultEl.innerText = `${winner} is the winner!`;
};

const resetGame = function () {
  // Enable the weapon buttons
  const buttons = document.getElementsByClassName("btn-weapon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  // Reset scores and result message
  userScore = 0;
  compScore = 0;
  userScoreEl.innerText = "0";
  compScoreEl.innerText = "0";
  resultEl.innerText = "";
  userChoiceEl.innerText = "";
  compChoiceEl.innerText = "";
};

const playAgain = function () {
  // Reset scores and result message
  userScore = 0;
  compScore = 0;
  userScoreEl.innerText = "0";
  compScoreEl.innerText = "0";
  resultEl.innerText = "";
  userChoiceEl.innerText = "";
  compChoiceEl.innerText = "";

  // Enable the weapon buttons
  const buttons = document.getElementsByClassName("btn-weapon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
};

const playGame = function (weapon) {
  // Remove active class from all buttons
  const buttons = document.getElementsByClassName("btn-weapon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add active class to the clicked button
  event.currentTarget.classList.add("active");

  const userChoice = weapon;
  const compChoice = getCompChoice();
  const result = getResult(userChoice, compChoice);
  updateScores(result, userChoice, compChoice);
};
