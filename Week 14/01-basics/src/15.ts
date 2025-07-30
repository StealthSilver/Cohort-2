// types


type User8 = {
    name: string;
    age: number
}
function isLegal(user: User8){
return user.age > 18
}