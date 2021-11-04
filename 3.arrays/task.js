function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length)
    return arr1.every((item, index) => item === arr2[index]);
  else return false;
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter((number) => number % 3 === 0 && number > 0)
    .map((number) => number * 10);

  return resultArr; // array
}
