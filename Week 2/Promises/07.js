// promisified setTImeout

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("5 sec are passed");
}

setTimeoutPromisified(5000).then(callback);
