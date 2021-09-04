let player = "X";
let result = document.getElementById("result");
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (e.target.innerText === "") {
    e.target.innerText = player;
    checkWinner();
    // checkDraw();
    switchPlyar();
  }
}
function switchPlyar() {
  player = player === "X" ? "O" : "X";
}
function gameStart() {
  cells.forEach((cell) => (cell.innerText = ""));
  result.innerHTML = "";
}
function checkWinner() {
  const winCom = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const matched = winCom.some((com) =>
    com.every((ci) => cells[ci].innerText == player)
  );

  if (matched) {
    result.innerHTML = `Player ${player} :You Won!`;
  } else {
    const cellsArray = Array.from(cells);
    if (cellsArray.every((cell) => cell.innerText !== "")) {
      result.innerHTML = "Match Draw!!";
    }
  }
}

function checkDraw() {}
