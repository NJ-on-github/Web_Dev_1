var a = 5;
var b = 11;

console.log(a + b + 4); // adds the variables

var c ="string"; //a string in double quotes
var d = 'another string'; //a string in single quotes
var e = `yet another string`; //a string in backticks

console.log(typeof c, typeof a, typeof b); //prints the type of the variable,

const c1 = 5; //a constant
//same variable name rules are applied as c++.

//let is block level
//var is global level

//DATA Types

// Primitive Data Types
// Number
// String
// Boolean
// Null
// Undefined
// BigInt
// Symbol


// type of null = object


//write an example of object

let o = {
    name: "John",
    age: 30,
    country: "USA",
    "country code": 500
}

console.log(o);

// o is object
// name is key
// John is value
// age is key
// 30 is value
// country is key
// USA is value
// country code is key
// 500 is value
// for properties with space we have to use ""


//To add something to object
o.salary = "1cr"; // we can alter this
console.log(o);
o.isTruthful = true;
console.log(o);

//value can be object as well as function

