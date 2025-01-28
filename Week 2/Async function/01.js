// function to add two numbers
function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans = sum("89", 98);
console.log(ans);

// function to add numbers upto n

function rec(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(rec(10));

// the above function just in order 1
function better(a) {
  return (a * (a + 1)) / 2;
}

console.log(better(10));
