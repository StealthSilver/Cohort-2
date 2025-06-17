//async code

console.log("Hi!");

// timeout is the callback function called back by setTimeout after 5000 ms
setTimeout(function timeout() {
  console.log("set tiumeout complete");
}, 5000);

console.log("the set timeout is running");
