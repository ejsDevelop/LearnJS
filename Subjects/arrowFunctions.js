function sum(a, b) {
  return a + b
}
//sum creates variable in function.  We need to create one in arrow
// arrow function convert
let sum2 = (a, b)  => {
  return a + b
}
//further reduce-assunes after arroe assuemd returned
let sum3 = (a, b) => a + b



function isPositive(mumber) {
  return number >= 0  
} 
// arrow function convert
let isPositive2 = (mumber) => {
  return number >= 0  
} 
//single paramater only
let isPositive3 = number => number >= 0



function randomNumber() {
  return Math.random
}
// arrow function convert
let randomNumber2 = () => {
  return Math.random
}
let randomNumber3 = () => Math.random


document.addEventListener('click', function() {
  console.log('Click')
})
// arrow function convert
document.addEventListener('click', () => {
  console.log('Click')
})
document.addEventListener('click', () => console.log('click'))