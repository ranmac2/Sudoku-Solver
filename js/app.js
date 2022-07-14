const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81;

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", "0");
  inputElement.setAttribute("max", "9");
  inputElement.style.height = "50px";
  inputElement.style.width = "50px";
  inputElement.style.boxSizing = "border-box";
  inputElement.style.borderSpacing = "0";
  puzzleBoard.style.height = "450px";
  puzzleBoard.style.width = "450px";
  puzzleBoard.appendChild(inputElement);
}
