function random(resolve) {
  setTimeout(resolve, 3000);
}

let p = new Promise(random); // supposed to return a promise

// using the eventual value retured by the promise class
function callback() {
  console.log("promise succeded");
}

p.then(callback);
