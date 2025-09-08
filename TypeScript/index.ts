// number, string, boolean
let age : number = 25;
let name : string = "John Doe";
let isStudent : boolean = true;

// if we cant determine the type, we can use 'any'
let anything: any = "Could be anything";
anything = 42; // Now it's a number

// arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];

// tuples
let person: [string, number] = ["Alice", 30];

// enums
enum Color {
    RED,
    GREEN,
    BLUE
}


console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

// npx tsc 