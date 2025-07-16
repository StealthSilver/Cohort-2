// function that runs another function after 1 sec
// in this case the type of the callback function will be void as the callback does not return a value
function delayedCall(anotherFn: () => void ){
    setTimeout(anotherFn, 1000);
}


// this function returns nothing -> void
function log(){
    console.log("hi there");
}

delayedCall(log);