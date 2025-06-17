// making a synchronous set timeout
// this can be used to pause the js thread for the [timeout] time

function setTimeoutSync(timeout) {
  let startTime = new Date();

  // This loop continuously checks whether the time elapsed has exceeded the timeout.

  while (1) {
    let currrentTime = new Date();
    if (currrentTime.getTime() - startTime.getTime() > timeout) {
      console.log("no hi there until i finish :)");
      break;
    }
  }
}

setTimeoutSync(1000);
console.log("hi there");
