// To sum up the discussion thus far:

// 1.Execution context is set at function call-time and includes a context object (this) 
// that is passed to the function, either implicitly or explicitly.
// 2.In "bare" function calls, the context object is automatically set to the global object 
// unless prevented by "use strict".
// 3.In "non-bare" function calls, the context object is automatically set to the "object to
// the left of the dot."
// 4.(For Object-Oriented JavaScript) The context object defaults to the new thing being 
// created in a class's constructor

//The context object can be explicitly set in a function by invoking call on the function and passing an object (thisArg) as the first argument; the object can then be accessed via this inside the function. Additional parameters to the function are listed after thisArg.
//The context object can be explicitly set in a function by invoking apply on the function and passing an object (thisArg) as the first argument; the object can then be accessed via this inside the function. Additional parameters to the function are stored in an array which is passed as the second argument.
//The context object can be locked in a function by invoking bind on the function and passing it a thisArg. The bind function makes a copy of the functionality of the function it was called on, but with all the this stuff locked in place, and returns that function. That new function can have arguments passed to it with () as usual.
// five key terms.

// Execution Context:
// the space set aside in the JavaScript engine's memory containing references
// to the variables and methods that are currently in scope. At the global level, this is the 
// global execution context; inside a function, it is the function execution context plus the execution 
// contexts available to it via the scope chain


// this:
//refers to a special object that is part of the current execution context. The value of this is 
// determined based on how and where the function is invoked. In future lessons, we'll explain 
// how JavaScript determines what this is when a function is invoked.


// call: 
//This is a method on a function that calls the function, just like (). The first argument, 
// traditionally called thisArg, is the object that should be used as the value of this when the 
// function is invoked. You then list any other arguments you want to send to the function after the 
// thisArg. An invocation of call looks like this: 
// Calculator.sum.call(multilingualMessages, 1, 2).


// apply: 
// This is a method on a function that calls the function, just like (). The first argument, 
// traditionally called thisArg, is the object that should be used as the value of this when the 
// function is invoked. You then pass additional arguments you want to send to the function as an 
// Array after the thisArg. An invocation of apply looks like this: 
// Calculator.sum.apply(multilingualMessages, [1, 2]).


//bind: 
//This method returns a copy of the function it's called on, but with the execution context 
//"set" to the argument that's passed to bind. It looks like this: sayHello.bind(greenFrog)("Hello") 
//=> "Mr. GreenFrog says *Hello* to you all."


