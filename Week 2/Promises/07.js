function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("1 sec has passed");
}

setTimeoutPromisified(5000).then(callback);
