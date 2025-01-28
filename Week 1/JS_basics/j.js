// function to find the males with age >= 18
let newArr = [];

function find(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age >= 18) {
      if (array[i].gender == "male") {
        newArr.push(array[i].name);
      }
    }
  }

  return newArr;
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

console.log(find(b));
