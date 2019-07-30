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

//20190729







