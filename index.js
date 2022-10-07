// Variable names cannot be a reserved keyword
// Variable names should be meaningful
// Variable names cannot start with a number
// Variable names cannot contain a space or hyphen
// Variable names are case sensitive

let firstName = "Kade";
let lastName = "Illian";

const interestRate = 0.3;
console.log(interestRate);

// const Variable types mean that the variable cannot be changed
let name = "Kade"; // String Literal
let age = 19; // Number Literal
let isApproved = false; // Boolean Literal
let nationality = undefined; // Undefined Literal (uncommon)
let selectedColor = null; // Null Literal

// 'typeof' allows us to check the type of a variable

// How to declare an object (Brackets are called an object literal, and it is the way we define the 'properties' of an object)
let person = {
  name: "Kade Illian",
  age: 19,
};

// Dot Notation allows us to read and write the property of an object
person.name = "Timbo";

// Bracket Notation also allows us to read and write the property of an object
person["name"] = "Wow";

console.log(person.name);

// Arrays!
// Arrays are objects in JavaScript
let selectedColors = ["red", "blue"]; // Square brackets indicate 'Array Literal'
selectedColors[2] = "green";
selectedColors[3] = 3; // Arrays can contain multiple data types in JavaScript
console.log(selectedColors);

// Functions
// The below function is performing a task that is then displayed on the console
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Kade", "Mega");
greet("Timbo");

// The below function is Calculating a value
function sqaure(number) {
  return number * number;
}
