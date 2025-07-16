// creating an interface for User type -> this is a typescript construct (custom type)

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal2(user: User): boolean {
	return user.age > 20;
}

// Example usage:
const user1: User = {
	firstName: "Random",
	lastName: "Verma",
	email: "random@gmail.com",
	age: 20
};

console.log(isLegal2(user1)); // true
