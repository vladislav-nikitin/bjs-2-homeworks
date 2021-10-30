// Задание 1
function getArrayParams(arr) {
  let min = +Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum = sum + arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arrOfArr = [
  [1, 2, 3, 4],
  [10, 20, -10, -20],
];
function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  //const result = func(arrOfArr[i]);
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) max = func(arrOfArr[i]);
  }
  return max;
}
//makeWork(arrOfArr, worker);

// Задание 3
function worker2(arr) {
  let min = +Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return max - min;
}
//makeWork(arrOfArr, worker2);
