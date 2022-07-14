const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81;
let submission = [];

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", 1);
  inputElement.setAttribute("max", 9);
  inputElement.style.height = "50px";
  inputElement.style.width = "50px";
  inputElement.style.boxSizing = "border-box";
  inputElement.style.borderSpacing = "0";
  puzzleBoard.style.height = "450px";
  puzzleBoard.style.width = "450px";
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push(".");
    }
  });
  console.log(submission);
};

const solve = () => {
  const axios = require("axios");

  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f0667091famshfafa07dc641d9dep18b515jsn365c9b1f70f4",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}',
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

solveButton.addEventListener("click", joinValues);
