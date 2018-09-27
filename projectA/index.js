const nconf = require('nconf');
const projectB = require('projectB');

nconf.env().file(`.env`).use('file');
console.log(nconf.get('NODE_ENV')); // npmlink
projectB.func(); // undefined
