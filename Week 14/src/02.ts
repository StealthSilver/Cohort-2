// function to greet

function greet(firstName: String){
    console.log("hello " + firstName);
}

//explicitly calling any
function greet2(secondName: any){
    console.log("hello" + secondName)
}

greet("pogo");

greet2(423);