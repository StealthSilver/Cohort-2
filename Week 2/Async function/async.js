// async code running (out of order)

function first() {
  console.log("First task");
}

function second() {
  console.log("Second task");
}

function third() {
  console.log("Third task");
}

// Simulate an async operation using setTimeout
function asyncTask() {
  setTimeout(() => {
    console.log("Async task finished");
  }, 2000); // Waits 2 seconds before executing
}

first();
asyncTask(); // This can run while the program moves on
second();
third();
