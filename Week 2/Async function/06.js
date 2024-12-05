function timeout() {
    console.log("click the button")
}

console.log("hi");

setTimeout(timeout, 1000);

console.log("welcome to loupe")

let c = 0;

for (let i = 0; i < 1000000000; i++) {  // CPU intensive task
    c = c + 1;
}

console.log("expensive opn done")