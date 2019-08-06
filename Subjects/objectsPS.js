// Intro to objects
// An object is a type of data. Objects are super important because you can only pass two types of data around as variables—primitives and objects.

const anObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
  // ...
}

const mymacbookPro = {
  operatingSystem: 'macOS Sierra',
  screenResolution: '2880x1800',
  screenSize: '13 inch',
  usbPorts: 4,
  storage: '512gb'
  // ... Other specs
}

const anObject2 = {
  string: 'Yay',
  number: 1,
  boolean: true,
  anotherObject: {},
  afunction: function () {}, // more on functions later
  anArray: [] // more on array in a future lesson
}

let macbookProStorage = mymacbookPro.storage
console.log(macbookProStorage)

let myAwesomeMac = mymacbookPro['operatingSystem']
console.log(myAwesomeMac)


// invalid identifier
const ObjWithInvalidIdentifer = {
  'First Name': 'Zell'
}

// invalid must USE bracket notation
const firstName2 = ObjWithInvalidIdentifer['First Name'] 
console.log(firstName2)

// Dot notation
mymacbookPro.storage = '256gb'

// Bracket notation
mymacbookPro['usbPorts'] = 2

console.log(mymacbookPro)

delete mymacbookPro.storage
console.log(mymacbookPro)

// Properties as functions
function sayName () {}
sayName.property = 'Hallelujah'

console.log(sayName.property)

//The properties that contain functions as their values are called methods.
const macbook = {
  playMusic: function () {
    /* some code to play music */
  }
}

// Calling a method with the dot notation
macbook.playMusic()

// Calling a method with the bracket notation
macbook['playMusic']()

const greeter = {
  sayHello: function (name) {
    console.log('Hello ' + name + '!')
  }
}

greeter.sayHello('Zell')





