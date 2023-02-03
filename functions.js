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
// function statement or function declaration
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


//named function expression
var named_func_var = function xyz(){
    console.log("this is named function expression");
    console.log(xyz);
} 
named_func_var();
//xyz(); 
// This will throw an reference error as xyz is in local scope it can be accessed inside the xyz function



// self invoking functions

// function is self invoked by adding () at the end in function expression
const func_exp2 = (function (a, b) { console.log(a + b) })(2, 34);


// anonymous self-invoking function
(function () {
    console.log("This is self invoked function")
})();


// First class function
var first_class_var = function (param1) {
    console.log(param1);
    return function (){
        console.log("This function is returned")
    }
}
console.log(first_class_var(function (){
    console.log("This function is passed as argument")
}));



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


//Higher order function
let radius = [3,2,1,4];

function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius;
}

function diameter(radius){
    return 2*radius;
}

function calculate(arr, logic){
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// custom map function
console.log("custom map function");
Array.prototype.calculate = function(logic){
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.calculate(area))
console.log(radius.calculate(circumference))
console.log(radius.calculate(diameter))


console.log("Map ,filter and reduce")
// map function
let arr = [5,2,1,6,3]

console.log(arr.map((x) => x*2));

//filter function
console.log(arr.filter((x) => x%2 != 0))

// reduce funcion

// to find sum
let output = arr.reduce((acc,curr) => acc += curr, 0);
console.log(output)




