let promise = new Promise((resolve, reject) => {
  resolve(5); // Resolving with a value of 5
});

promise
  .then((result) => {
    console.log(result); // 5
    return result * 2; // Return a new value (multiply by 2)
  })
  .then((result) => {
    console.log(result); // 10 (Result of previous .then())
    return result + 3; // Return a new value (add 3)
  })
  .then((result) => {
    console.log(result); // 13 (Result of previous .then())
  })
  .catch((error) => {
    console.log(error); // If any error occurs in any step
  });
