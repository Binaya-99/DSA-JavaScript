// Variables and Data Types in JavaScript

// 1. Declaring Variables

// Using var (function-scoped or globally-scoped)
var name = "John Doe";
console.log("Name (var):", name);

// Using let (block-scoped)
let age = 25;
console.log("Age (let):", age);

// Using const (block-scoped and cannot be reassigned)
const birthYear = 1998;
console.log("Birth Year (const):", birthYear);

// 2. Data Types

// String
let greeting = "Hello, world!";
console.log("Greeting (String):", greeting);

// Number
let count = 42;
console.log("Count (Number):", count);

// Boolean
let isActive = true;
console.log("Is Active (Boolean):", isActive);

// Null
let emptyValue = null;
console.log("Empty Value (Null):", emptyValue);

// Undefined
let notAssigned;
console.log("Not Assigned (Undefined):", notAssigned);

// Object
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};
console.log("Person (Object):", person);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers (Array):", numbers);

// Function
function sayHello() {
    return "Hello!";
}
console.log("Say Hello (Function):", sayHello());

// 3. Type Coercion

// Automatic type conversion
let result1 = "5" + 5; // String concatenation
console.log("Result 1 (Type Coercion):", result1); // "55"

let result2 = "5" * 5; // Numeric multiplication
console.log("Result 2 (Type Coercion):", result2); // 25

// 4. Checking Data Types

console.log("Type of name:", typeof name); // "string"
console.log("Type of age:", typeof age); // "number"
console.log("Type of isActive:", typeof isActive); // "boolean"
console.log("Type of emptyValue:", typeof emptyValue); // "object"
console.log("Type of notAssigned:", typeof notAssigned); // "undefined"
console.log("Type of person:", typeof person); // "object"
console.log("Type of numbers:", typeof numbers); // "object"
console.log("Type of sayHello:", typeof sayHello); // "function"
