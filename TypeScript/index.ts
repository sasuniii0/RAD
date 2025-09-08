// number, string, boolean
let age : number = 25;
let name : string = "John Doe";
let isStudent : boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

// if we cant determine the type, we can use 'any'
let anything: any = "Could be anything";
anything = 42; // Now it's a number

// arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];

// tuples
let student: [string, number] = ["Alice", 30];

// enums
enum Color {
    RED,
    GREEN,
    BLUE
}

let favoriteColor: Color = Color.GREEN;

//object
let person : { name: string; age: number; } = {
    name: "Alice",
    age: 30,
}

//interface
interface User{
    name: string
    email: string
    age?: number // this is optional
}

// using the interface
let user_data1: User = {
    name: "Bob",
    email: "bob@gmail.com"
}

let user_data2 : User={
    name: "Ann",
    email: "ann@gmail.com",
    age: 28
}


// npx tsc 