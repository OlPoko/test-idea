/* 2. Завдання:
Необхідно вивести "X" якщо перемогли хрестики, або вивести "O" якщо перемогли нулики, або вивести "D" якщо нічия.
Наприклад:
var data = ["X.O", "XX.", "XOO"];
Результат: "X"
*/

function game(data) {
  const gridSymbol = data.map((row) => row.split(""));

  for (let i = 0; i < 3; i++) {
    if (
      gridSymbol[i][0] === gridSymbol[i][1] &&
      gridSymbol[i][1] === gridSymbol[i][2]
    ) {
      if (gridSymbol[i][0] !== ".") return gridSymbol[i][0];
    }
  }

  for (let j = 0; j < 3; j++) {
    if (
      gridSymbol[0][j] === gridSymbol[1][j] &&
      gridSymbol[1][j] === gridSymbol[2][j]
    ) {
      if (gridSymbol[0][j] !== ".") return gridSymbol[0][j];
    }
  }

  if (
    gridSymbol[0][0] === gridSymbol[1][1] &&
    gridSymbol[1][1] === gridSymbol[2][2]
  ) {
    if (gridSymbol[0][0] !== ".") return gridSymbol[0][0];
  }

  if (
    gridSymbol[0][2] === gridSymbol[1][1] &&
    gridSymbol[1][1] === gridSymbol[2][0]
  ) {
    if (gridSymbol[0][2] !== ".") return gridSymbol[0][2];
  }

  return "D";
}

console.log(game(["X.O", "XX.", "XOO"]));
console.log(game(["OOX", "XOO", "O.O"]));
console.log(game(["XOX", "OXO", "OXO"]));
