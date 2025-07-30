// interfaces -> optional inputs

interface User3 {
    name: "koko" | "pogo"; // now only two names are possible
    age: number;
    address?: {
        city?: string;
        country?: string;
        pincode: number;
    };
}

let user2: User3 = {
    name: "koko",
    age: 21,
};

function isLegal4(user: User3): boolean {
    return user.age >= 18;
}

const ans2 = isLegal4(user2); // use correct function and variable

if (ans) {
    console.log("I am legal");
} else {
    console.log("I am illegal");
}
