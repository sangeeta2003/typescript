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


function runAfter1sec(fn :()=> void){
    setTimeout(fn,1000);

}
runAfter1sec(function(
){
    console.log("hey there");
})