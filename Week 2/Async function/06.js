function timeout() {
  console.log("timeout complete");
}

console.log("hi");

// dummy i/o intensive task
setTimeout(timeout, 1000);

console.log("set timeout still running");

let c = 0;

// CPU intensive task

for (let i = 0; i < 1000000000; i++) {
  c = c + 1;
}

console.log("expensive opn done");
