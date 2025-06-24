// map funcition fron scratch

const map = (arr, fn) => {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr.push(fn(arr[i]));
  }
  return transformedArr;
};
