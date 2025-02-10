function greet(user:{
    name : string,
    age:number
}){
    console.log("hello " + user.name)
}

greet({
    name:"pogo", 
    age: 87
})