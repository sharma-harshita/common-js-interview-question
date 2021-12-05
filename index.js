//call, apply, bind in JS are the different ways of executing the function . This specific function can take different objects while execution, the properties of the objects in this function will be accessed by using "this" keyword 



// var user = {
//     name : "John David",
//     age : 25,
//     displayInfo : function (){
//         console.log(this.name + " is "+ this.age + " years old.");
//     }
// }

// user.displayInfo()

// var user2={
//     name : "Karthik",
//     salary : 25000
// }

// function employeeDetails(greet){
//     console.log(greet, this.name, this.salary);
// }

let num = 10

function double (n){
    return 2*n
}

let a = double(num);
console.log(a);

console.log(num)