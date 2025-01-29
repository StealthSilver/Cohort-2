// error handling in async await

async function fetchUserSafely() {
  try {
    console.log("Fetching user...");

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();

    console.log("User:", user);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}

fetchUserSafely();
