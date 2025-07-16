// function that runs another function after 1 sec
// in this case the type of the callback function will be void as the callback does not return a value
function delayedCall(fn: () => void ){
    setTimeout(fn, 1000);
}

delayedCall(function(){
    console.log("hello")
})