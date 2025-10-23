//conditional statments:

//if-else statment:
let agee = 18;

if (agee === 18) {
  console.log("You can vote");
} else {
  console.log("you cannot vote");
}

let num = 29;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

let mode = "bei";
let color;

if (mode === "dark") {
  console.log("black");
} else {
  console.log("white");
}

let number = 78;

if (number % 5 === 0) {
  console.log("it can divide to 5");
} else {
  console.log("it cannot divide to 5");
}

//else-if statment:

if (mode === "dark") {
  console.log("black");
} else if (mode === "beige") {
  console.log("beige");
} else if (mode === "blue") {
  console.log("blue");
} else if (mode === "green") {
  console.log("green");
} else {
  console.log("white");
}

let marks = prompt("enter your marks(0-100):");
let grade;

if (marks >= 90 && marks >= 100) {
  grade = "a";
} else if (marks >= 70 && marks <= 89) {
  grade = "b";
} else if (marks >= 60 && marks <= 69) {
  grade = "c";
} else if (marks >= 50 && marks <= 59) {
  grade = "d";
} else if (marks >= 0 && marks <= 49) {
  grade = "f";
}

console.log("Your grade accouring to marks:", grade);

// turnary operator:

let age = 33;

let result = age >= 18 ? "adult" : "not adult";

console.log(result);
