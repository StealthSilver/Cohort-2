// filtering even numbers form an array

function getEvenNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]
