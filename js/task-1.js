// 1. Завдання:
// Задано масив чисел
// Необхідно вивести найбільший добуток сусідніх чисел.
// Наприклад:
// var inputArray = [3, 6, -2, -5, 7, 3];
// Результат: 21 тому що добуток 7*3 дає найбільший результат

// P.S. Добуток рахуємо в такий спосіб
// 3 * 6, потім 6 * -2, потім -2 * -5 і т.д.
// Приклади для тестування:
// [3, 6, -2, -5, 7, 3]
// [-1, -2]
// [5, 1, 2, 3, 1, 4]
// [1, 2, 3, 0]
// [9, 5, 10, 2, 24, -1, -48]

function inputArray(arr) {
  if (arr.length < 2) {
    return null;
  }

  let maxNumber = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const number = arr[i] * arr[i + 1];
    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return maxNumber;
}

console.log(inputArray([3, 6, -2, -5, 7, 3]));
console.log(inputArray([-1, -2]));
console.log(inputArray([5, 1, 2, 3, 1, 4]));
console.log(inputArray([1, 2, 3, 0]));
console.log(inputArray([9, 5, 10, 2, 24, -1, -48]));
