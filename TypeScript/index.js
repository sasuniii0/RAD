"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number, string, boolean
let age = 25;
let name = "John Doe";
let isStudent = true;
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
// if we cant determine the type, we can use 'any'
let anything = "Could be anything";
anything = 42; // Now it's a number
// arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
let flags = [true, false, true];
// tuples
let student = ["Alice", 30];
// enums
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let favoriteColor = Color.GREEN;
//object
let person = {
    name: "Alice",
    age: 30,
};
// using the interface
let user_data1 = {
    name: "Bob",
    email: "bob@gmail.com"
};
let user_data2 = {
    name: "Ann",
    email: "ann@gmail.com",
    age: 28
};
let student1 = {
    name: "Charlie",
    age: 22,
    school: "XYZ University"
};
//Union types
let value;
value = "Hello";
value = 100;
value = true;
value = null;
// Functions
function sum(x, y) {
    return x + y;
}
let x = sum(10, 20);
console.log(x);
//Optional parameter..
const temp = (name, age) => {
    return age ? `Name: ${name}, Age: ${age}` : `Name: ${name}, Age not provided`;
};
temp("John");
temp("John", 25);
function multiply(a, b = 1) {
    return a * b;
}
multiply(5); // b defaults to 1
multiply(5, 2); // b is 2
// Compile the TypeScript code to JavaScript
// npx tsc 
//# sourceMappingURL=index.js.map