let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded successfully!");
  } else {
    reject("Failed to load data.");
  }
});

promise
  .then((result) => {
    console.log(result); // "Data loaded successfully!" if resolved
  })
  .catch((error) => {
    console.log(error); // "Failed to load data." if rejected
  });
