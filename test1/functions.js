

function sayHello() {
  console.log('Hello World!') 
}

sayHello()



function sayName(firstName, lastName) {
  console.log('first name is ' + firstName)
  console.log('last name is ' + lastName)
}

sayName('Erik', 'Schjolberg')


function get2() {
  return 2
}

const results = get2()
console.log(results)



// function add2 (num) {
//   return num + 2
// }

// const number = add2(8)
// console.log(number)

// function sum(num1, num2) {
//   return num1 + num2
// }

// const result = sum(5, 10)
// console.log(result)


// function multiply (num1, num2) {
  // return num1 * num2
// }

// const result = sum(multiply(2, 3), 10)
// console.log(result)



// function three () {
//   return 3
// }

// function add2(callback) {
//   return callback() + 2
// }

// const resultOne = add2(three)
// console.log(resultOne)

function add2 (num) {
  return num + 2
}

const number = add2(8)
console.log(number)



/* Hoisting
When functions are declared with a function declaration (what you learned above), they are hoisted to the top of your scope. More on scope in a later lesson, but this means the following two sets of code are exactly the same.

function sayHello () {
  console.log('Hello world!')
}
sayHello()
// This is automatically converted to the above code
sayHello()
function sayHello () {
  console.log('Hello world!')
}
Function hoisting gets confusing because JavaScript changes the order of your code. I highly recommend you declare your functions before you use them. Don't rely on hoisting.

Declaring functions with function expressions
A second way to declare functions is with a function expression. Here, you declare a variable, then assign a function without a name (also called an anonymous function) to it.

const sayHello = function () {
  console.log('This is declared with a function expression!')
}
Functions declared with function expressions are not automatically hoisted to the top of your scope.

sayHello () // Error, sayHello is not defined
const sayHello = function () {
  console.log(aFunction)
}
 */

//  EXERCISE SECTION

 const sayHello2 = function () {
  console.log('This is declared with a function expression!')
}

sayHello2()


function logger () {
  console.log("I am doing an exercise") 
}

logger()


function add(number1, number2) {
  return number1 + number2
}

const myResult = add(15, 31)
console.log(myResult)


function multiply(numbers1, numbers2) {
  return numbers1 * numbers2
}

const myAnswer = multiply(10, 43)
console.log(myAnswer)


