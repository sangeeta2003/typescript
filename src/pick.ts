interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string
};

type updateProps = Pick<User,'name' | 'age' |'email'>
