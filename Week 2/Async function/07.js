// making a synchronous set timeout

function setTimeoutSync(timeout) {
  let startTime = new Date();

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
