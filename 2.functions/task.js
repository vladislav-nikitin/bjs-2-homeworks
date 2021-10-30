// Задание 1
function getArrayParams(arr) {
  let min = +Infinity;
  let max = -Infinity;
  let sum = 0;
  let count = 0;
  let avg;
  let arr = [];
  for (let i = -100; i <= 100; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) arr[i] = min;
    if (arr[i] > max) arr[i] = max;
    sum = sum + arr[i];
    count++;
    avg = +(sum / count).toFixed(2);
  }
  console.log(min);
  console.log(max);
  console.log(avg);

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
  let max = worker(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker(arrOfArr[i]) > max) worker(arrOfArr[i]) = max;
  }
  return max;
}
makeWork(arrOfArr, worker);


// Задание 3
function worker2(arr) {
  let min = +Infinity;
  let max = -Infinity;
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) arr[i] = min;
    if (arr[i] > max) arr[i] = max;
    diff = max - min;
  return diff;
  }
}
makeWork(arrOfArr, worker2);