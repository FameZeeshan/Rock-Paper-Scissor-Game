`use strict`;
// elements
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
// global variables
let userChoice = "";
let computerChoice = "";

// functions
const getComputerChoice = function () {
  const weapons = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * 3);
  const randomChoice = weapons[randomNumber];
  return randomChoice;
};

const getResult = function (userChoice, computerChoice) {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      return "Draw";
    } else if (computerChoice === "paper") {
      return "Lost";
    } else if (computerChoice === "scissors") {
      return "Won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Won";
    } else if (computerChoice === "paper") {
      return "Draw";
    } else if (computerChoice === "scissors") {
      return "Lost";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Lost";
    } else if (computerChoice === "paper") {
      return "Won";
    } else if (computerChoice === "scissors") {
      return "Draw";
    }
  }
};

const updateScores = function (result) {
  let userScore = 0;
  let compScore = 0;
  if (result === "Won") {
    userScore++;
  } else if (result === "Lost") {
    compScore++;
  } else if (result === "Draw") {
  }
};
const playGame = function (weapon) {
  const userChoice = weapon;
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  getResult(userChoice, computerChoice);
  console.log(userChoice, computerChoice, result);
};

// event listeners
