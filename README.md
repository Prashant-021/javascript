Asyncronous Javascript

JavaScript program is single threaded and all code is executed in a sequence, not in parallel. In JavaScript asynchrony is handled by using what is called an “asynchronous non-blocking I/O model”. What that means is that while the execution of JavaScript is blocking, I/O operations are not. 

It contains following methods
    
    1. Callbacks
        A callback is a function passed as an argument to another function.

    2. Promises
        A promise is an object that wraps an asynchronous operation and notifies when it’s done. 

    3. Async/Await
        Async is for declaring that a function will handle asynchronous operations and await is used to declare that we want to “await” the result of an asynchronous operation inside a function that has the async keyword.


Promise is the object that represents the eventual completion of asynchronous function.

There are three states in promise
1. Pending
2. Fullfilled
3. Rejected

