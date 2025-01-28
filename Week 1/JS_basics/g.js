// arrays / objects

// arrays in jS -> array in C -> array in C++ -> vectors in Rust -> arraylist in java
// objectsin js -> maps in C++ -> hashmap in rust -> hashmap in java

function greet(user) {
  return `hello ${user.name} your age is ${user.age}`;
}

let user = {
  name: "pogo",
  age: 19,
};

console.log(greet(user));

console.log(user["age"]);
console.log(user.age);
