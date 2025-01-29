// fetching with async await

async function fetchUser() {
  console.log("Fetching user...");

  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let user = await response.json(); // Convert to JSON

  console.log("User:", user);
}

fetchUser();
