interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: "opo", age: 20 }, { name: "pogo", age: 89 });
console.log(age);
