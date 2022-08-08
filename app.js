let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3);
console.log(word1 === word2);
console.log(word1 != word2);

// CONGROL FLOW
let item = "Annapurna";

if (item === "Annapurna") {
  console.log("Buy Annapurna");
} else if (item === "U2") {
  console.log("Buy U2");
} else if (item === "A1") {
  console.log("Buy Rocky Salt");
}

// Grading System
let score = 80;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Very Good");
} else if (score >= 70) {
  console.log("Good");
} else if (score >= 60) {
  console.log("Average");
} else if (score >= 50) {
  console.log("Credit");
} else if (score >= 40) {
  console.log("Pass");
} else if (score >= 0) {
  console.log("Fail");
}

// FUNCTION
function sum(a, b = 2) {
  let total = a + b;
  return total;
}

let eleven = sum(5);
console.log(eleven);

let eleven1 = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);

function multiply(a, b) {
  let total = a * b;
  return;
}

let ab = multiply;

// LOOPS
// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i + ". I will not talk in class again");
}

// While loop
let num = 1;
while (num <= 10) {
  console.log(num);

  num = num + 1;
}

// do ... while loop
let age = 18;
do {
  console.log(".You can't vote");
  age++;
} while (age < 18);

// Array methods
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29];

for (let age of ages) {
  console.log(Math.pow(age, 2));
}

let marriage = ages.filter((mark) => mark > 25);
console.log(marriage);

// map
let squares = ages.map((age) => age * age);
console.log(squares);

// find
let eighteen = ages.find((age) => age === 18);
console.log(eighteen);
