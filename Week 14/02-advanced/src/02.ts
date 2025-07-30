interface User2{
    id:string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User2, 'name' | 'age' | 'email'>

function updateUser(UpdateProps: UpdateProps){
    // hit the database tp update the user
}