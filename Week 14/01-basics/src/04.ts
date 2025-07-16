// if-else
function isLegal(age: number){
    if(age>18){
        return true;
    }
    else{
        return false;
    }

}

// the return type will be infered automatically that it is boolean type
console.log(isLegal(6))