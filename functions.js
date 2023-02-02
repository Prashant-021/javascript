var x = 1;


// function call
a();
b();
// due to hoisting we can call function before its declaration
// Note:- function declared using function expression are not hoisted

console.log(x) //this will print 1
console.log(a) // returns function object
console.log(a()) // returns function result
console.log(typeof (a()));


// function definition

// method 1
function a() {
    var x = 100; // x is the local variable we cannot access it outside this function
    console.log(x) //this will print 100
}

function b() {
    var x = 200;
    console.log(x) //this will print 200
}


// function expression

// function used in function expression here is anonymous (without name)
// they are invoked using variable name
const func_exp = function (a, b) { return a + b };
console.log(func_exp(2, 3))


// Function() constructor

// functions can also be declared using Function() Constructor
const my_function = new Function("a", "b", "return a-b")
let const_value = my_function(3, 2);
console.log(const_value)


// self invoking functions

// function is self invoked by adding () at the end in function expression
const func_exp2 = (function (a, b) { console.log(a + b) })(2, 34);


// anonymous self-invoking function
(function () {
    console.log("This is self invoked function")
})();


//arrow function 
// Arrow functions are not hoisted. They must be defined before they are used.

// using const instead of var is safer option as function expression is always constant value

const arr_fun = (a, b) => a / b;
console.log(arr_fun(23, 5))


// closure is the function along with it's lexical environment

//here we can access the grandparent variable inside inner most function
function out_func() {
    let a = 5;
    function in_func() {
        console.log(a)
    }
    return in_func;
}
out_func()();

// above 2 parathesis is same as below code
// var close = out_func();
// close();


function grandparent() {
    let val = 1000;
    function outer_func() {
        let a = 5;
        function inner_func() {
            console.log(a, val)
        }
        inner_func();

    }
    outer_func();
}
grandparent();


//Timeout + closure

// using var due to global scope the value of i will be refered after loop is traversed 
// function timeout_plus_closure() {
//     for (var i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello") // This line will be executed first
// }
// timeout_plus_closure();
//output will be 
// 5
// 5
// 5
// 5


// to print number in sequence then change var to let 
// because of block scope of let the value assign to each timeout callback function will be different
// function timeout_plus_closure() {
//     for (let i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello") // This line will be executed first
// }
// timeout_plus_closure();
//output will be 
// 1
// 2
// 3
// 4


// to get above output closure cabe used 
function timeout_plus_closure() {
    for (let i = 1; i < 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Hello") // This line will be executed first
}
timeout_plus_closure();






