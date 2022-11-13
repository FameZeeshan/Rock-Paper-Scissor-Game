`use strict`;
// elements
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");

const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const resultEl = document.getElementById("result");
// global variables
let userScore = 0;
let compScore = 0;

// functions
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
};
const playGame = function (weapon) {
  const userChoice = weapon;
  const compChoice = getCompChoice();
  const result = getResult(userChoice, compChoice);
  updateScores(result, userChoice, compChoice);
};

// event listeners
