const myPromise = new MyPromise((resolve, reject) => {
  console.log("Making pizza...");

  setTimeout(() => {
    const success = true; // Change to false to simulate failure
    if (success) {
      resolve("Pizza is ready!");
    } else {
      reject("We ran out of cheese...");
    }
  }, 3000);
});

myPromise.then((message) => {
  console.log(message); // This will log: "Pizza is ready!" after 3 seconds
});
