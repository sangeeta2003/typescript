// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string
// };

// type updateProps = Pick<User,'name' | 'age' |'email'>

// partial

interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    
}
updateUser({})


