// promisified version of set timeout

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  // returns an object of a promise class
}

function callback() {
  console.log("3 seconds have passed");
}

// setTimeout(3000, callback)
setTimeoutPromisified(3000).then(callback);
