// functions

function greet(name) {
  return "hello " + name;
}

let ans = greet("pogo");
let ans2 = greet("groot");
let ans3 = greet("micky");

console.log(ans);
console.log(ans2);
console.log(ans3);

function sum(a, b) {
  return a + b;
}

let c = sum(3, 4);
let d = sum(3, -4);
let e = sum(343, 4);

console.log(c);
console.log(d);
console.log(e);

console.log(4, "pogo");

function canVote(age) {
  if (age >= 18) {
    console.log("can vote");
  } else {
    console.log("cannot vote");
  }
}

canVote(90);
canVote(3);
