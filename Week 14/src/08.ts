interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal2(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}