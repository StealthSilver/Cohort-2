// code for a calculator made with functional arguments

function sum(a, b) {
  return a + b;
}

function dif(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(3, 4, dif));
