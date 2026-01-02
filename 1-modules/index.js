// const modulo = require('./printName.js');
const {printName, lastName} = require('./printName.js');
const os = require('os');
console.log(os.type());

//modulo.printName(`Leo ${modulo.lastName}`)
printName(`Leo ${lastName}`)