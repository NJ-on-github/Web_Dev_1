// CommonJS (old module system)
// const http = require('http');  
// const fs = require('fs');

//importing named export
// import {a,b} from "./modules.js";
// console.log(a);
// console.log(b);

//importing default export
// import blah from "./modules.js";
// console.log(blah);

//until now ES6 module  

const def = require('./modules.js'); //importing default export
console.log("gg");
console.log(def);

//any file in nodejs is a module by default
// CommonJS modules are wrapped in a function to create a local scope for the module
//module code is wrapped inside this function
// (function (exports, require, module, _filename, _dirname) {
//     // Module code actually lives here
// });