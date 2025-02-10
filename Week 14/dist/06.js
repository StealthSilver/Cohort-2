"use strict";
// function that runs another function after 1 sec
// in this case the type of the callback function will be void
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
