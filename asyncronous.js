
// fetching data from url using module called request
// const request = require('request');
// request('https://www.somepage.com', function(error, response, body){
//     if (error){
//         // error handle
//     }
//     else{
//         // Successful, do something
//     }
// });

// Callbacks
// A callback is a function passed as an argument to another function.

// callback function
function func1(val){    
    console.log("Callback function called")
    console.log("Hello! " + val)
}

function func2(firstName,lastName, myCallback){
    let name = firstName + lastName;
    console.log("Function 1 called")
    myCallback(name);
}

// logs Hello! PrashantPatel  
func2("Prashant","Patel",func1) 


// promise

// var var1 = new Promise(resolve, reject){
//     let x = 0;

// }