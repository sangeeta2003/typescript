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

// interface User{
//     firstname:string;
//     lastname:string;
//     age:number;
// };

// function isLegal(user:User){
//     if(user.age < 18){
//         return true;
//     } else{
//         return false;
//     }
// }

// function greet(user:User){
//     console.log("hi there" + user.firstname)
// }

// isLegal({
//     firstname:"sangeeta",
//     lastname:"mishra",
//     age:20
// })


// interfeces
interface Person{
    name:string;
    age:number;
greet(phrase:string):void;
}

 class Employee implements Person{
    name :string;
    age:number;
 

 constructor(n:string,a:number){
    this.name=n;
    this.age=a;

 }
 greet(phrase: string): void {
     console.log(`$(phase) $(this.name)`);
 }
 }

 const e = new Employee("sangeeta",20);
 console.log(e.name);
