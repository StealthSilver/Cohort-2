let promise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("There was an error.");
  }
});
