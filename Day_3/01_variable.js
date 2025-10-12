const ID = 5;
let Name = 'Hello, World!';
var email = "shubham@google.com";
without_keyword = "I am without keyword";


console.log("before changes:");
console.table({ID, Name, email, without_keyword});

console.log("after changes:");
// ID = 10; // error
Name = "change"; // valid
email = "change@google.com"; // valid
without_keyword = "change"; // valid
console.log("ID is constant so it cannot be changed.");
console.table({ID, Name, email, without_keyword});