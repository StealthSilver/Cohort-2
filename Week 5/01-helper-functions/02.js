// map function

// given an array, give back a new array in which every value is multiplied by 2

const input = [1, 2, 3, 4, 5, 6];

const transform = (i) => {
  return i * 2;
};

const ans = input.map(transform);
console.log(ans);
