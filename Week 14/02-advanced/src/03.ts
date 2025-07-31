 // Partial

interface User3{
    id:string;
    name: string;
    age: number;
    email: string;
    password: string;
}


type UpdatePropsOptional = Partial<UpdateProps>

function updateUser2(UpdateProps: UpdateProps){
    // hit the database to update the user
}