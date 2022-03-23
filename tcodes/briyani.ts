var empId : number;
var isIndian :boolean;
var say :String;
empId = " hello";

function greet(){
return "Hello";
}
 var greeting = greet();  //same line declaration
 greeting = 2;  // not possible
 console.log(greeting);

 var greetHello;
 greetHello = greet();
 greetHello = 2; // any data types 
 console.log(greeting);
//  --------------any type----------------------
var burger : any ;  // loosely type / loosely structured 
burger= "dominos";
burger = 2;
burger = true;
// ------------union type-------------

var isBurger :String | boolean ;
isBurger = "dominos";
isBurger = true;
isBurger = 2;




