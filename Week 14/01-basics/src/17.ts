// Define the interface
interface User12 {
    firstName: string; 
    lastName: string;
    age: number;
}

// Filter function to return users older than 18
function filterUsers(users: User12[]): User12[] {
    let ans: User12[] = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }

    return ans;
}

// Call the function with sample data
const filteredUsers = filterUsers([
    {
        firstName: "pogo", 
        lastName: "fuhf",
        age: 89
    },
    {
        firstName: "pdf", 
        lastName: "fuhf",
        age: 2
    },
    {
        firstName: "paw", 
        lastName: "fuhf",
        age: 12
    }
]);

console.log(filteredUsers);
