// Union Types
let mobile : string|number|boolean = "Samsung";
mobile = 123
mobile = true;

let myname: string | null;
myname = null;
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error

let myAge : string|number;
myAge = 22; // narrowing
console.log(myAge);

// console.log(myAge.toLowerCase());//Error
