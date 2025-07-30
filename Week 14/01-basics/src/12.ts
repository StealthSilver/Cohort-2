// using one interface in different places

interface Address {
    city : string;
    country: string;
    pincode: number;
}

interface User4 {
    name: "koko" | "pogo"; // now only two names are possible
    age: number;
    address: Address;
}

interface Office{
    address: Address
}

let user3: User3 = {
    name: "koko",
    age: 21,
};

function isLegal5(user: User3): boolean {
    return user.age >= 18;
}

const ans3 = isLegal5(user2); 

if (ans) {
    console.log("I am legal");
} else {
    console.log("I am illegal");
}
