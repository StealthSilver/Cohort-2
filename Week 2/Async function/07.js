// making a synchronous set timeout

function setTimeoutSync(timeout) {
    let startTime = new Date();

    while (1) {
        let currrentTime = new Date();
        if (currrentTime.getTime() - startTime.getTime() > timeout) {
            break;
        }
    }
}

setTimeoutSync(1000);
console.log("hi there")

