"use strict";
// function greet(firstName:string){
//     console.log("hello" + firstName)
// }
// greet("sangeeta")
;
function isLegal(user) {
    if (user.age < 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi there" + user.firstname);
}
isLegal({
    firstname: "sangeeta",
    lastname: "mishra",
    age: 20
});
