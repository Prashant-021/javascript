JavaScript Learning 

Select branch for specific topic

1. What is JavaScript?
JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It lets us add interactivity to pages e.g. you might have seen sliders, alerts, click interactions, popups, etc on different websites -- all of that is built using JavaScript. Apart from being used in the browser, it is also used in other non-browser environments as well such as Node.js for writing server-side code in JavaScript, Electron for writing desktop applications, React Native for mobile applications, and so on.

2. Javascript Variables
Most of the time, a JavaScript application needs to work with information. To store and represent this information in the JavaScript codebase, we use variables. A variable is a container for a value.

variables in Javascript are let, var and const

    1. [var] keyword The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

    2. [let] keyword The let declaration declares a block-scoped local variable, optionally initializing it to a value.

    3. [const] keyword Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

Variable Declarations To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the var, let, or const keywords.

Hoisting JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes to the top of their scope, prior to execution of the code.

Scopes In JavaScript, scope refers to the visibility of a variable or how it can be used after it is declared. The scope of a variable depends on the keyword that was used to declare it.

There are three scopes 1. Global Scope 2. Function Scope 3. Block Scope


3. Datatype in JavaScript

Data type refers to the type of data that a JavaScript variable can hold. 

There are seven primitive data types in JavaScript 
   
    1. Number
    2. BigInt
    3. String
    4. Boolean
    5. Null
    6. Undefined 
    7. Symbol. 

Objects are non-primitives.

Objects

JavaScript object is a data structure that allows us to have key-value pairs; so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type. Comparing it to a real-world object, a pen is an object with several properties such as color, design, the material it is made of, etc. In the same way, JavaScript objects can have properties that define their characteristics.

The object data type can contain:

    1. An object
    2. An array
    3. A date


![image](https://user-images.githubusercontent.com/85476487/215725843-7dd077df-1f7f-41c8-a556-886bf87f4258.png)


4. Closures in Javascript

closure is the function along with it's lexical environment

In simple words a function nested inside a function has access to the variables declared in the parent function also its grandparent function.


5. Functions in JavaScript

Functions are the block of code to perform particulat task.
They execute when they are called or invoked. 
To define and declare the function first type "function" keyword followed by function name and then "()" for parameters and arguement. After that in {} bracket statements are present in which required calculation is done

Syntax:- 
function name(param1, param2){
    // Code
}

function returns a value, if return statement is not used in function then it returns 'undefined by default'

6. Asyncronous Javascript

JavaScript program is single threaded and all code is executed in a sequence, not in parallel. In JavaScript asynchrony is handled by using what is called an “asynchronous non-blocking I/O model”. What that means is that while the execution of JavaScript is blocking, I/O operations are not. 

It contains following methods
    
    1. Callbacks
        A callback is a function passed as an argument to another function.

    2. Promises
        A promise is an object that wraps an asynchronous operation and notifies when it’s done. 

    3. Async/Await
        Async is for declaring that a function will handle asynchronous operations and await is used to declare that we want to “await” the result of an asynchronous operation inside a function that has the async keyword.



