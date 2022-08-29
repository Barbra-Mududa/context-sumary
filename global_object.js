//The Execution Context of "Bare" Function Calls
//In the browser-based runtime, the global object is called window. In NodeJS, it's called global.

const contextReturner = function() {
    return this;
}
contextReturner(); //=> window
contextReturner() === window; //=> true

//example in Chrome
const locationReturner = function() {
    return this.location.host;
}  
console.log(locationReturner());

//even in a function inside of another function, the inner function's default context is still the global object:
function a() {
    return function b() {
      return this;
    }
}
a()() === window; //=> true
