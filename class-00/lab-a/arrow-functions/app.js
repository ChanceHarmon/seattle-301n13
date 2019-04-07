'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



let sum = function(a, b, c, d) {
  return a + b + c + d;
};
let total = (a, b, c ,d) => `${a + b + c + d}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));
console.log(total(1, 2, 3, 4));

let objectLit = function() {
  return {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };
};
let objectKey = array => ({
  key1: array[0],
  key2: array[1],
  key3: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());
console.log(objectKey(['value1', 'value2', 'value3']));

let sumAndProduct = function(a, b) {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
}
let addAndMulti = (a, b) => [(a + b), (a * b)];

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));
console.log(addAndMulti(3, 9));

let message = function(name) {
  return `Hello, ${name}!`;
};
let message2 = name => ('Hello, ' + `${name}!`)

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));
console.log(message2('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe', 'Schmoe', 100);

const student2 = array1 => ({
  name: array1[0],
  age: array1[1],
  hometown: array1[2],
});

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);
console.log(student2(['Joe', 'Schmoe', 100]));
// Constructors
// Arrow functions can’t be used as constructors as other functions can. Don’t use them to create similar objects as you would with other functions. If you attempt to use new with an arrow function, it will throw an error. Arrow functions, like built-in functions (aka methods), don’t have a prototype property or other internal methods. Because constructors are generally used to create class-like objects in JavaScript, you should use the new ES6 classes instead.
// reference https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};
let proto2 = name => ('Hi, my name is ' + `${name}`);

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());
console.log(proto2('Joe'));
// Please note the reference above I found about constuctors and prototype's from sitepoint.com. Would ove to learn it if I am just missing something?
//


Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};
let course = name => (`${name}`);

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());
console.log(course('This student is enrolled in Code 301.'));


// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(joe.scope());

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(joe.scopeArrow());

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?

// I think it is refering to the function of Student, while using the parameters of joe from the constructor function.

// 2. What is "this" when joe.scopeArrow() is invoked?

// This brought up an entire library of files that are under a heading of Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}, and it goes on and on.
// 
//3. Explain why "this" is different when an arrow function is used.
//
// I am still very confused on this, I tried to read a few different versions of documentation, and I still don't quite understand the difference.
