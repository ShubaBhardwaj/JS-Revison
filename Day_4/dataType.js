"use strict"; // treated as js new version

// alert("dataType.js"); // this is used in the browser console

let number = 5; // number
let string = "Hello"; // string
let boolean = true; // boolean
let nullVar = null; // null --> kuch nahi ha vha (stand alone value)
let undefinedVar; // undefined --> kuch value assign nahi kra  
let symbol = Symbol("id"); // symbol --> unique identifier used in React
let object = { name: "John", age: 30 }; // object
let array = [1, 2, 3, 4, 5]; // array

console.table({ number, string, boolean, nullVar, undefinedVar, object, array });

console.log(typeof number); // number
console.log(typeof string); // string
console.log(typeof boolean); // boolean
console.log(typeof nullVar); // ye object (this is a bug in JS) 
console.log(typeof undefinedVar); // is ka type undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof object); // object
console.log(typeof array); // object (arrays are objects in JS)