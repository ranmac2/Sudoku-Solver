const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const resultsDisplay = document.querySelector(".results-display");
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
  inputElement.style.border = "1px solid gray";
  puzzleBoard.style.height = "450px";
  puzzleBoard.style.width = "450px";
  puzzleBoard.appendChild(inputElement);
  if (
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
    ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
  ) {
    inputElement.style.backgroundColor = "lightgrey";
  }
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

const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll("input");
  if (isSolvable && solution) {
    inputs.forEach((input, i) => {
      input.value = solution[i];
    });
    resultsDisplay.innerHTML = "Puzzle Solved!";
  } else {
    resultsDisplay.innerHTML = "Puzzle Unsolvable!";
  }
};

const solve = () => {
  joinValues();
  const data = submission.join("");
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f0667091famshfafa07dc641d9dep18b515jsn365c9b1f70f4",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    data: {
      puzzle: data,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      populateValues(response.data.solvable, response.data.solution);
    })
    .catch((error) => {
      console.error(error);
    });
};

solveButton.addEventListener("click", solve);
