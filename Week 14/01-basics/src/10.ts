// interfaces

interface User2 {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    };
}

let user: User2 = {
    name: "koko",
    age: 21,
    address: {
        city: "paris",
        country: "France",
        pincode: 494232,
    },
    
}

function isLegal(user: User) : boolean{
    return user.age >= 18;
}