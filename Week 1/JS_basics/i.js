// array of object

let arr = ["pogo", 21, {
    name: "guava",
    age: 81,
    cities: ["delhi", "banglore", {
        country: "malasia", city: "kuala lampur"
    }]
}]

// object of arr

let obj = {
    color: ["red", "green", "yellow"],
    num: [3, 4, 5, 2]
}

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
        gender: "male"
    },

    {
        name: "pogo",
        age: 18,
        gender: "female"
    },

    {
        name: "jogo",
        age: 19,
        gender: "male"
    }
]

console.log(find(b));

let a = {
    name: ["logo", "pogo", "guava", "mango"],
    age: [4, 56, 32, 13],
    gender: ["male", "female", "male", "female"]
}