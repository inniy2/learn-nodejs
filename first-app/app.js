function sayHello(name){
  console.log('Hello ' + name);
}

sayHello('Mosh');
// result is print Mosh

/*
 * In javascript, there is window object and it is object
 * if you set var in javascript, you can access the var in window object
 *
console.log(window);

setTimeout()
clearTimeout();

setInterval();
clearInterval()

window.console.log

var message = '';


global.console.log
global.console.log
*/

/*
 * However, nodejs has global object equalent to window object
 * but you can't access the var from global object
 */
var message = '';
global.console.log(global.message);
// result is undefined

console.log(module)
/* 
result is that module is not a global module so it shows you current module
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/home/sunny/learn-nodejs/first-app/app.js',
  loaded: false,
  children: [],
  paths:
   [ '/home/sunny/learn-nodejs/first-app/node_modules',
     '/home/sunny/learn-nodejs/node_modules',
     '/home/sunny/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
*/

// This is how to load custom module
// var logger = require('./logger');
// console.log(logger)
// logger.log('message');
/*
{ log: [Function: log] }
message
*/


// What if you reset the logger var
// var logger = require('./logger');
// console.log(logger)
// logger = 1
// logger.log('message');
// result : logger.log is not a function error

/* What if you reset the logger const
with help of certain tool such as jshint
you can identify the method try to override constant,
if you use constant over var. 
Basically, debugging is going to easier if you use constant.
*/

// const logger = require('./logger');
// console.log(logger)
// logger = 1
// logger.log('message');
// result : TypeError: Assignment to constant variable.

// if you export a single function then it will change like this:
const log = require('./logger');
console.log(log)
log('message');
const
// result : TypeError: Assignment to constant variable.


/* nodejs is not run by itself
it is wrap by javascript
(function (exports, requires, module, __filename, __dirname)
*/

