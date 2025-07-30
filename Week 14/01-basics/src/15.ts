// types

type Name = { name: string };
type Age = { age: number };

// Intersection
type Person = Name & Age;

type Admin = Person & { role: "admin" };
type Guest = Person & { access: "limited" };

// Union
type User10 = Admin | Guest;

function showUserInfo(user: User10) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
  if ("role" in user) {
    console.log("Admin access");
  } else {
    console.log("Guest access");
  }
}
