// function greet(firstName:string){
//     console.log("hello" + firstName)
// }
// greet("sangeeta")


// function isLegal(age:number):boolean{
//     if(age > 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// let x = isLegal(18)


// f

// const greet = (name:string) => `Hello, ${name}!`;

interface User{
    firstname:string;
    lastname:string;
    age:number;
};

function isLegal(user:User){
    if(user.age < 18){
        return true;
    } else{
        return false;
    }
}

function greet(user:User){
    console.log("hi there" + user.firstname)
}

isLegal({
    firstname:"sangeeta",
    lastname:"mishra",
    age:20
})
