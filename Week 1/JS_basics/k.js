// Filter for male users aged 18 or older and map their names

function find(array) {
  return array
    .filter((user) => user.age >= 18 && user.gender === "male")
    .map((user) => user.name);
}

let b = [
  {
    name: "logo",
    age: 89,
    gender: "male",
  },
  {
    name: "pogo",
    age: 18,
    gender: "female",
  },
  {
    name: "jogo",
    age: 19,
    gender: "male",
  },
];

console.log(find(b)); // Output: ["logo", "jogo"]
